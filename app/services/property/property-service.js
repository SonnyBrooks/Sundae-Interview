import Property from './Property.model';

async function getAllProperties() {
    return await Property.findAll();
}

async function addProperty(propertyName, address, city, state, zip) {
    let newProperty = await Property.create({
        property_name: propertyName,
        address,
        city,
        state_code: state,
        zip_code: zip
    })
    return newProperty;
    

}

export default { getAllProperties, addProperty };