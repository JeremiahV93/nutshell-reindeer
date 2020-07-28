import axios from 'axios';
import apiKeys from '../apiKeys.json';
import staffData from './staffData';
// import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const addAssignedKey = (data) => {
  const objectCollection = data;
  Object.keys(objectCollection).forEach((itemId) => {
    objectCollection[itemId].assigned = false;
  });
  console.warn('objectCollection', objectCollection);
  return objectCollection;
};

const getAllJobs = () => new Promise((resolve, reject) => {
  staffData.getStaff()
    .then((allStaff) => {
      axios.get(`${baseUrl}/dinosaurs.json`)
        .then((rawDinos) => {
          axios.get(`${baseUrl}/rides.json`)
            .then((rawRides) => {
              axios.get(`${baseUrl}/vendors.json`)
                .then((rawVendors) => {
                  const dinosaurs = addAssignedKey(rawDinos.data);
                  const rides = addAssignedKey(rawRides.data);
                  const vendors = addAssignedKey(rawVendors.data);
                  const allJobs = {
                    dinosaurs,
                    rides,
                    vendors,
                  };
                  // loop over each employee:
                  allStaff.forEach((employee) => {
                    if (employee.assignedTo !== '') {
                      allJobs[employee.assignmentCategory][employee.assignedTo] = true;
                    }
                  });
                  resolve(allJobs);
                })
                .catch(((err) => { reject(err); }));
            });
        });
    });
});

export default { getAllJobs };
