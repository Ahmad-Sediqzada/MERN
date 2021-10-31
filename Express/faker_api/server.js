// import dependencies/nodemon
const { urlencoded } = require('express');
const express = require('express');
const { internet } = require('faker');
const faker = require('faker')
const app = express();



// middlewar/configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// C - Create: We use POST
// R - Read: We use GET
// U - Update: We use PUT
// D - Destroy: We use DELETE


app.get("/api/welcome", (request, response) => {
    console.log(request);
    console.log("This is welocme API route");
    response.json({message: "Welcome to our API"});
})


// This is our call to faker api
app.get("/api/faker", (request, response) => {
    const name = faker.name.firstName();
    const email = faker.internet.email();

    response.json({
        firstName: name,
        userEmail: email
    })

    console.log(request);
    console.log(response)
})


app.post("/api/welcome", (request, response) => {
    response.json({
        message: "Life is beautiful",
        infoSentByUser: request.body
    })
    console.log(request.body);
})


const createUser = () => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
}

const createCompany = () => {
    return {
        companyName: faker.company.companyName(),
        department: faker.commerce.department(),
        // using an object to group all of the address data together
        //    We can create and group whatever data we want using faker
        address: {
            streetAddress: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
}

app.get("/api/users/new", (request, response) => {
    const newUser = createUser();

    console.log("new user:")
    console.log(newUser);
    response.json(newUser);
});

app.get("/api/companies/new", (request, response) => {
    let newCompany = createCompany();

    console.log("new company:")
    console.log(newCompany);

    newCompany.department = faker.commerce.department();
    console.log("updated company department:")
    console.log(newCompany);

    response.json(newCompany);
});

app.get("/api/user/company", (request, response) => {
    let newUser = createUser();
    let newCompany = createCompany();

    console.log("new user:")
    console.log(newUser);

    console.log("new company:")
    console.log(newCompany);

    response.json({ user: newUser, company: newCompany });
});



// listen on 8000
app.listen(8000, () => console.log("You have successfully conected to port 8000"));
