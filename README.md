# 📝 Next.js Blog

## 🚀 Features
- Fetches posts from **JSONPlaceholder API**.
- Displays posts with dynamically generated **hashtags**.
- Allows **multi-select hashtag filtering** using a dropdown.
- Implements a **scrollable hashtag dropdown** for better UI/UX.
- Shows only the **first 5 posts initially**, with a sidebar for additional posts.
- Uses **Tailwind CSS** for a responsive and visually appealing design.

---

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd <your-project-folder>
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser.

---

## 💡 Approach
- **Dynamic Data Handling:** Used `useState` and `useEffect` for handling posts and filtering logic.
- **File-Based Routing:** Utilized Next.js pages for clean and structured navigation.
- **Static Generation:** Used `getStaticProps` and `getStaticPaths` (if applicable) for pre-rendering.
- **Tailwind CSS Styling:** Ensured responsive layouts and a scrollable dropdown for hashtag selection.

---

## 📁 Folder Structure
```
/pages
  ├── index.js      (Home Page with post filtering)
  ├── post
  │   ├── [id].js   (Dynamic Post Page)

/components
  ├── PostCard.js      (Reusable post card component)
  ├── HashtagFilter.js (Dropdown filter for hashtags)
```

---

## 🎨 Tailwind CSS Styling
- **Responsive grid layout** for displaying posts:
  ```html
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  ```
- **Scrollable dropdown for hashtags:**
  ```css
  select {
    max-height: 200px;
    overflow-y: auto;
  }
  ```
- **Sidebar layout** for displaying extra posts.

---

## ✅ Next.js Best Practices
✔ Used **`getStaticProps`** for fetching API data.  
✔ Implemented **clean, file-based routing**.  
✔ Ensured **reusability** of components like `PostCard.js`.  
✔ Applied **modular CSS classes** for styling via Tailwind.  
✔ Fully **responsive** design.

---

## 🛠 Built With
- **Next.js**
- **React**
- **Tailwind CSS**

---

## 📞 Need Help?
If you run into any issues, feel free to open an Issue on GitHub or reach out at bugheanudanutandrei@gmail.com. 🚀

