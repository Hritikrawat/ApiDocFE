  // import axios from 'axios';
  // import { ApiDocumentationRequest } from '../types';

  // const API_URL = 'http://localhost:1234/doc/download';

  // export const generateDocumentation = async (data: ApiDocumentationRequest): Promise<Blob> => {
  //   try {
  //     const response = await axios.post(`${API_URL}`, data, {
  //       responseType: 'blob',
  //     });
  //     return response.data;
  //   } catch (error) {
  //     console.error('Error generating documentation:', error);
  //     throw error;
  //   }
  // };
  import axios from 'axios';
import { ApiEndpoint } from '../types';

const API_URL = 'http://localhost:1234/doc/download';

interface DocumentationRequest {
  endpoints: ApiEndpoint[];
}

export const generateWordDocumentation = async (data: DocumentationRequest): Promise<Blob> => {
  try {
    const response = await axios.post(`${API_URL}/word`, data, {
      responseType: 'blob',
    });
    return response.data;
  } catch (error) {
    console.error('Error generating Word documentation:', error);
    throw error;
  }
};

export const generatePdfDocumentation = async (data: DocumentationRequest): Promise<Blob> => {
  try {
    const response = await axios.post(`${API_URL}/pdf`, data, {
      responseType: 'blob',
    });
    return response.data;
  } catch (error) {
    console.error('Error generating PDF documentation:', error);
    throw error;
  }
};