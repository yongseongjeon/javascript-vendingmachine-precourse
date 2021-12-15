export const input = ({ className, placeholder, type }) => {
  return `<input 
            id="${className}" 
            placeholder="${placeholder}"
            type="${type}" 
          />`;
};
