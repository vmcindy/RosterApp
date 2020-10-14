export class RosterListService {
    rosterList = [
        {type: 'Student', firstName: 'Ronald', lastName: 'Weasly', age : '11'},
        {type: 'Student', firstName: 'Harry', lastName: 'Potter', age : '11'},
        {type: 'Student', firstName: 'Hermione', lastName: 'Granger', age : '11'},
        {type: 'Staff', firstName: 'Ruebus', lastName: 'Hagrid', age : '52'},
    ];

    getList() {
        return this.rosterList;
    }

    getPerson(id:number) {
        return this.rosterList[id];
    }
    
    addPerson(type: string, fname:string, lname:string, age: string) {
        this.rosterList.push({
            type: type,
            firstName: fname,
            lastName: lname,
            age: age
        });
    }

    updatePerson(id: number, type: string, fname:string, lname:string, age: string) {
        this.rosterList[id].type = type;
        this.rosterList[id].firstName = fname;
        this.rosterList[id].lastName = lname;
        this.rosterList[id].age = age;
    }

    deletePerson(id: number) {
        this.rosterList.splice(id,(id+1));
    }
}