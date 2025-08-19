<div align="center">
</div>

## 🚀 Run Locally

### 1. Install Node.js
If you don’t already have it:  
- Download Node.js from [https://nodejs.org](https://nodejs.org)  
- Install it using the default options.
- After installing you need to add path into environments variables
- Press **win**Search for Environment Variable Click Edit :
- <div align="center">
<div align="center">
<div align="center">
  <img src="https://github.com/hasnainmorani700/Youtube_Script_Helper/blob/main/edit-environment-variables.webp" alt="Environment variables" width="50%" />
</div>


### 2. Open the Project Folder
- On Windows, press **Win + R**, type `cmd`, and press Enter.  
- In the terminal, move to the project folder, for example:  

```bash
cd C:\Users\YourName\Downloads\my-ai-app
```

### 3. Install Dependencies

Run:

```bash
npm install
```

### 4. Add Your API Key

* Find the file named **.env.local** in the project folder.
* Open it with Notepad (or any text editor).
* Add your Gemini API key like this:

```
GEMINI_API_KEY=your_api_key_here
```

* Save the file.

### 5. Start the App

Run:

```bash
npm run dev
```

* The terminal will show something like:

```
Local:   http://localhost:5173/
```

* Open that link in your web browser to see the app running.

---

## 📱 Run on Your Phone (Optional)

If your PC is connected to your phone’s hotspot, you can also view the app directly on your mobile:

1. Start the app with:

   ```bash
   npm run dev -- --host
   ```

2. Find your PC’s IP address:

   * On Windows, run:

     ```bash
     ipconfig
     ```

     Look under **Wireless LAN adapter Wi-Fi** → **IPv4 Address** (e.g., `192.168.43.123`).

3. On your phone, open:

   ```
   http://<your_pc_ip>:5173/
   ```

   Example:

   ```
   http://192.168.43.123:5173/
   ```

---

✅ That’s it! Your app is now running locally.  
💡 To stop it, go back to the terminal and press **Ctrl + C**.
