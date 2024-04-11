const parseQuery = require('./queryParser');
const readCSV = require('./csvReader');

async function executeSELECTQuery(query) {
try {
    
    const { fields, table } = parseQuery(query);
    const data = await readCSV(`${table}.csv`);
    
    // Filter the fields based on the query
    return data.map(row => {
        const filteredRow = {};
        fields.forEach(field => {
            filteredRow[field] = row[field];
        });
            return filteredRow;
        });
    } catch (error) {
    throw new Error(`Error executing SELECT query: Invalid query`);
    }
        

}

module.exports = executeSELECTQuery;