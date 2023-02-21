const shailesh = {
    firstName : "Shailesh",
    lastName : "Pandey",
    role : "admin",
    courseCount : 5,
    getInfo : function () {
        console.log(`
        First Name : ${this.firstName}
        Last Name : ${this.lastName}
        and  his role is ${this.role}
        and he study ${this.courseCount} Course.
        `);
    },
};


const Abhi = {
    firstName : "Abhi",
    lastName : "Sonone",
    role : "sub-admin",
    courseCount : 15,
};

// shailesh.getInfo();
// Abhi.getInfo();

// shailesh.getInfo.bind(Abhi)();

var abhiInfo =shailesh.getInfo.bind(Abhi);
abhiInfo();

shailesh.getInfo.call(Abhi);


