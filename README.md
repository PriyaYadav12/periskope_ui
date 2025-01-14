# React Application Documentation

## Overview
This React application is a simple dashboard that displays a list of groups, showing sidebar and detailed group message. It uses Tailwind CSS for styling and Supabase as the backend database.

---

## Key Features
- Displays a table of group data fetched from Supabase.
- Reusable components and consistent styling using Tailwind CSS.

---

## File Structure
### **`src` Directory:**
- **`components/`**: Contains reusable React components like `Table` and `Button`.
- **`assets/`**: Stores static assets like icons and images.

---

## Setup Instructions
### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/PriyaYadav12/periskope_ui.git periskope_ui
   cd periskope_ui
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure Supabase:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     REACT_APP_SUPABASE_URL=<your-supabase-url>
     REACT_APP_SUPABASE_KEY=<your-supabase-key>
     ```
   - use query from query.sql to create table and use csv to import data

  
4.  Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

---

## Usage
1. Open the app in your browser at `http://localhost:3000`.
2. View the group data in the table.

---

## Error Handling
- **Data Fetch Errors**: Alerts the user if fetching data from Supabase fails.

---

## Styling
### Reusable Styles



---

## Code Example
### Table Component
#### Description
Fetches group data from Supabase and displays it in a table format.

#### Code
```tsx
useEffect(() => {
  async function fetchData() {
    try {
      const { data, error } = await supabase
        .from('groups')
        .select('*')
        .order('id', { ascending: true });
      if (error) {
        console.error('Error fetching data:', error.message);
        alert('Failed to fetch group data. Please try again.');
      } else {
        setGroups(data || []);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      alert('Something went wrong while fetching data.');
    }
  }
  fetchData();
}, []);
```

---

## UI Example
-- UI can be seen in periskope.png

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
