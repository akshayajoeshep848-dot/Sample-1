# JS practice question on DOM

> For each question below create a html file to display all the data in the html (`not console.log`). You can create one html file for one question or you can do all of them in one file by using section for each question.

## Simple Examples

(Primarily flat objects with primitive values)

### 1\. To-Do List Items

A classic example. Each object represents a task with a unique ID, text content, and a completion status.

```javascript
const todoList = [
  { id: 1, task: "Buy groceries", isComplete: false },
  { id: 2, task: "Finish project report", isComplete: false },
  { id: 3, task: "Call the dentist", isComplete: true },
];
```

### 2\. Dropdown Menu Options

Used to dynamically populate a `<select>` element in HTML.

```javascript
const countryOptions = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "mx", label: "Mexico" },
  { value: "gb", label: "United Kingdom" },
];
```

### 3\. High Scores

A simple list for a game leaderboard.

```javascript
const highScores = [
  { rank: 1, user: "ACE", score: 95000 },
  { rank: 2, user: "GMR", score: 87200 },
  { rank: 3, user: "KID", score: 79000 },
];
```

### 4\. Image Gallery Sources

A list of image objects, perfect for building a photo gallery component.

```javascript
const galleryImages = [
  {
    id: "img001",
    src: "/images/sunset.jpg",
    alt: "A vibrant sunset over the ocean",
  },
  {
    id: "img002",
    src: "/images/mountains.jpg",
    alt: "Snow-capped mountains under a blue sky",
  },
  {
    id: "img003",
    src: "/images/forest.jpg",
    alt: "Sunlight filtering through a dense forest",
  },
];
```

### 5\. Basic User Directory

A simple list of users for an admin panel or "team" page.

```javascript
const users = [
  { id: 101, username: "jdoe", email: "john.doe@example.com", isActive: true },
  {
    id: 102,
    username: "asmith",
    email: "alice.smith@example.com",
    isActive: false,
  },
  {
    id: 103,
    username: "bwhite",
    email: "bob.white@example.com",
    isActive: true,
  },
];
```

---

## Medium Complexity Examples

(Objects with more properties, including simple arrays or a single nested object)

### 6\. Shopping Cart

A list of items in an e-commerce cart. Each object includes product details and the quantity ordered.

```javascript
const shoppingCart = [
  {
    sku: "SHOE-M-10B",
    productName: "Men's Running Shoes",
    price: 89.99,
    quantity: 1,
  },
  {
    sku: "SOCK-A-03P",
    productName: "Athletic Socks (3-Pack)",
    price: 15.0,
    quantity: 2,
  },
];
```

### 7\. Blog Post Summaries

A list of posts for a blog's homepage. Includes an array of simple strings for tags.

```javascript
const blogPosts = [
  {
    slug: "my-first-post",
    title: "My First Blog Post",
    author: "Admin",
    date: "2025-10-21",
    tags: ["welcome", "intro"],
  },
  {
    slug: "advanced-js-tricks",
    title: "Advanced JavaScript Tricks",
    author: "DevJane",
    date: "2025-10-22",
    tags: ["javascript", "webdev", "tutorial"],
  },
];
```

### 8\. Calendar Events

A list of events to be rendered on a calendar component.

```javascript
const calendarEvents = [
  {
    id: "evt1",
    title: "Team Sync Meeting",
    start: "2025-10-23T10:00:00Z",
    end: "2025-10-23T10:30:00Z",
    allDay: false,
  },
  {
    id: "evt2",
    title: "Project Deadline",
    start: "2025-10-24T23:59:59Z",
    end: "2025-10-24T23:59:59Z",
    allDay: true,
  },
];
```

### 9\. Financial Transactions

A bank statement or transaction log.

```javascript
const transactions = [
  {
    id: "txn_12345",
    date: "2025-10-21T09:15:00Z",
    amount: -55.4,
    description: "Coffee Shop",
    category: "Food & Drink",
  },
  {
    id: "txn_12346",
    date: "2025-10-20T17:00:00Z",
    amount: 1500.0,
    description: "Paycheck",
    category: "Income",
  },
];
```

### 10\. API Error Log

A list of error objects, often used for logging or displaying notifications to a user.

```javascript
const errorLog = [
  {
    timestamp: 1697970000000,
    code: "E_AUTH_FAILED",
    message: "User authentication failed: Invalid token.",
    severity: "high",
  },
  {
    timestamp: 1697970120000,
    code: "E_API_TIMEOUT",
    message: "Request to /api/data timed out.",
    severity: "medium",
  },
];
```

---

## Complex Examples

(Objects with nested objects and/or nested arrays of objects)

### 11\. E-commerce Products

A list of products for a catalog. Each product has nested objects for details and an array of objects for variants (e.g., different colors/sizes).

```javascript
const products = [
  {
    id: "prod_abc1",
    name: "Classic T-Shirt",
    category: "Apparel",
    price: 25.0,
    details: {
      material: "100% Cotton",
      brand: "FashionCo",
    },
    variants: [
      { sku: "TS-BLK-M", color: "Black", size: "Medium", stock: 50 },
      { sku: "TS-WHT-L", color: "White", size: "Large", stock: 30 },
    ],
  },
  {
    id: "prod_xyz9",
    name: "Noise-Cancelling Headphones",
    category: "Electronics",
    price: 199.99,
    details: {
      connectivity: "Bluetooth 5.0",
      brand: "AudioPhile",
    },
    variants: [
      { sku: "HP-MAT-BLK", color: "Matte Black", stock: 15 },
      { sku: "HP-SLV-GRY", color: "Silver Grey", stock: 0 },
    ],
  },
];
```

### 12\. Social Media Feed

A list of posts, where each post object contains a nested user object and a nested array of comment objects.

```javascript
const socialFeed = [
  {
    id: "post_001",
    timestamp: "2025-10-22T13:00:00Z",
    author: {
      userId: "u_jane",
      username: "JaneDev",
      avatarUrl: "/avatars/jane.png",
    },
    content: "Just deployed my new website! Check it out.",
    likes: 42,
    comments: [
      {
        id: "c_001",
        author: { userId: "u_bob", username: "BobDesign" },
        text: "Looks amazing! Great job on the UI.",
      },
      {
        id: "c_002",
        author: { userId: "u_alice", username: "AliceCode" },
        text: "What stack did you use?",
      },
    ],
  },
];
```

### 13\. Weather Forecast API Response

A list of daily forecasts. Each day's forecast includes an overview object and a nested array for the hourly breakdown.

```javascript
const weatherForecast = [
  {
    date: "2025-10-23",
    summary: {
      high: 72,
      low: 58,
      condition: "Partly Cloudy",
      precipitation: 10, // in percent
    },
    hourly: [
      { time: "13:00", temp: 71, condition: "Sunny" },
      { time: "14:00", temp: 72, condition: "Sunny" },
      { time: "15:00", temp: 72, condition: "Clouds increasing" },
    ],
  },
  {
    date: "2025-10-24",
    summary: {
      high: 68,
      low: 55,
      condition: "Showers",
      precipitation: 60,
    },
    hourly: [
      { time: "13:00", temp: 67, condition: "Cloudy" },
      { time: "14:00", temp: 66, condition: "Light Rain" },
      { time: "15:00", temp: 65, condition: "Showers" },
    ],
  },
];
```

### 14\. Student & Course Roster

A list of courses. Each course has an instructor object and a nested array of enrolled student objects, which themselves might contain grade information.

```javascript
const courseRoster = [
  {
    courseCode: "CS101",
    title: "Introduction to Computer Science",
    instructor: {
      name: "Dr. Evelyn Reed",
      office: "Building 4, Room 312",
    },
    enrolledStudents: [
      {
        studentId: "s12345",
        name: "Michael Chen",
        grade: "A-",
      },
      {
        studentId: "s12346",
        name: "Sarah Kim",
        grade: "B+",
      },
    ],
  },
];
```

### 15\. UI Dashboard Configuration

A data structure used to dynamically build a user's dashboard. Each object defines a widget, its position, and its specific data source or settings.

```javascript
const dashboardLayout = [
  {
    id: "widget-sales-overview",
    type: "LineChart",
    gridPosition: { x: 0, y: 0, width: 2, height: 1 },
    dataSource: "/api/analytics/sales?range=30d",
    options: {
      title: "Sales (Last 30 Days)",
      color: "#3498db",
    },
  },
  {
    id: "widget-user-activity",
    type: "DataTable",
    gridPosition: { x: 2, y: 0, width: 1, height: 2 },
    dataSource: "/api/users/activity",
    options: {
      title: "Recent User Activity",
      columns: ["username", "action", "timestamp"],
    },
  },
  {
    id: "widget-server-status",
    type: "StatusIndicator",
    gridPosition: { x: 0, y: 1, width: 1, height: 1 },
    dataSource: "/api/status/servers",
    options: {
      title: "Server Status",
    },
  },
];
```
