export const NEXT_PUBLIC_API_URL = 'http://localhost:5000/api/user/';

export const API_ENDPOINT = {
    GET_TESTIMONIAL_LIST: 'getTestimonialList',
    ADD_CONTACT: 'addContact',
    GET_EVENTS: 'getEventList',
    GET_CMS: 'getCMSList',
    GET_GALLERY: 'getGalleryList',
    GET_FILE: (id)=>`${NEXT_PUBLIC_API_URL}file/${id}`,
}

export const ERROR_MESSAGES = "This field is required"