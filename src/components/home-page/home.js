import ko from 'knockout';
import homeTemplate from 'text!./home.html';
import csv from 'csv';

class HomeViewModel {
    constructor(route) {
        this.csvText = ko.observable('');

        this.parsedCsv = ko.observable();
    }

    parseCsv() {
        csv.COLUMN_SEPARATOR = '\t';
        const csvParsed = csv.parse(this.csvText());
        console.log(csvParsed);
        this.parsedCsv(csvParsed);
    }
}

export default { viewModel: HomeViewModel, template: homeTemplate };