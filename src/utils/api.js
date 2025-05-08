import axios from "axios";

// Function to fetch all data
export const fetchAllData = async () => {
  try {
    const response = await axios.get("/data/dummy.json");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

// Function to fetch homepage data
export const fetchHomepageData = async () => {
  try {
    const response = await axios.get("/data/dummy.json");
    return response.data.homepage;
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return null;
  }
};

// Function to fetch all tours
export const fetchAllTours = async () => {
  try {
    const response = await axios.get("/data/dummy.json");
    return response.data.tours;
  } catch (error) {
    console.error("Error fetching tours data:", error);
    return null;
  }
};

// Function to fetch a specific tour by ID
export const fetchTourById = async (id) => {
  try {
    const response = await axios.get("/data/dummy.json");
    const tour = response.data.tours.find((tour) => tour.id === parseInt(id));
    return tour || null;
  } catch (error) {
    console.error("Error fetching tour data:", error);
    return null;
  }
};