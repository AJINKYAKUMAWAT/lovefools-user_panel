import Image1 from "../assets/images/Post1.png";
import Image2 from "../assets/images/Post2.png";
import Image3 from "../assets/images/Post3.png";
import Image4 from "../assets/images/Post4.png";

// export const NEXT_PUBLIC_API_URL = "http://localhost:5000/api/user/";
export const NEXT_PUBLIC_API_URL = "https://lovefools-backend-76pv.vercel.app/api/user/";


export const API_ENDPOINT = {
  GET_TESTIMONIAL_LIST: "getTestimonialList",
  ADD_CONTACT: "addContact",
  GET_EVENTS: "getEventList",
  GET_CMS: "getCMSList",
  GET_GALLERY: "getGalleryList",
  GET_FILE: (id) => `${NEXT_PUBLIC_API_URL}file/${id}`,
};

export const ERROR_MESSAGES = "This field is required";

export const GalleryImage = [
  {
    id: 1,
    image: Image1,
  },
  {
    id: 2,
    image: Image2,
  },
  {
    id: 3,
    image: Image3,
  },
  {
    id: 4,
    image: Image4,
  },
  {
    id: 5,
    image: Image1,
  },
  {
    id: 6,
    image: Image2,
  },
  {
    id: 7,
    image: Image3,
  },
  {
    id: 8,
    image: Image4,
  },
  {
    id: 9,
    image: Image1,
  },
  {
    id: 10,
    image: Image2,
  },
  {
    id: 11,
    image: Image3,
  },
  {
    id: 12,
    image: Image4,
  },
  {
    id: 13,
    image: Image2,
  },
  {
    id: 14,
    image: Image3,
  },
  {
    id: 15,
    image: Image4,
  },
  {
    id: 16,
    image: Image1,
  },
  {
    id: 17,
    image: Image2,
  },
  {
    id: 18,
    image: Image3,
  },
  {
    id: 19,
    image: Image4,
  },
  {
    id: 20,
    image: Image1,
  },
  {
    id: 21,
    image: Image2,
  },
  {
    id: 22,
    image: Image3,
  },
  {
    id: 23,
    image: Image4,
  },
];

export const AboutUsSection =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eligendi odit, tempora minima exercitationem consequatur veniam pariatur distinctio velit et nisi maiores nulla soluta tenetur. Eos nam perferendis animi eligendi.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eligendi odit, tempora minima exercitationem consequatur veniam pariatur distinctio velit et nisi maiores nulla soluta tenetur. Eos nam perferendis animi eligendi\nLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eligendi odit, tempora minima exercitationem consequatur veniam pariatur distinctio velit et nisi maiores nulla soluta tenetur. Eos nam perferendis animi eligendi";


  export const options = [
    { value: 1, label: "Table-1" },
    { value: 2, label: "Table-2" },
    { value: 3, label: "Table-3" },
    { value: 4, label: "Table-4" },
    { value: 5, label: "Table-5" },
  ];

  export const options2 = [
    { value: 1, label: "Table-1", image:"" },
    { value: 2, label: "Table-2", image:"" },
    { value: 3, label: "Table-3", image:"" },
    { value: 4, label: "Table-4", image:"" },
    { value: 5, label: "Table-5", image:"" },
  ];
  
  