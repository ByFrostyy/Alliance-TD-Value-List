const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

code = code.replace(/interface RobloxUser \{/, "interface RobloxUser {\n  email?: string;");

code = code.replace(/const isAdmin = \["byfrosty".*?\]\.includes\(user\.name\.toLowerCase\(\)\);/g, `const isAdmin = user.email && adminEmails.includes(user.email.toLowerCase()) || ["byfrosty", "frosty_2", "begzod2211", "begzodfaezullaev", "mruptime", "camdenlovesriolu", "edenzk", "terrafield", "geniusbuy", "secretoftim"].includes(user.name.toLowerCase());`);

code = code.replace(/let maintenanceActive = false;/, `let maintenanceActive = false;\nlet adminEmails: string[] = ["begzodfaezullaev@gmail.com"];`);

const adminEndpoints = `
  // Admin endpoints
  app.get("/api/admin/emails", (req, res) => {
    const sessionToken = req.headers.authorization;
    if (!sessionToken || !sessions[sessionToken]) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const user = sessions[sessionToken];
    const isAdmin = user.email && adminEmails.includes(user.email.toLowerCase()) || ["byfrosty", "frosty_2", "begzod2211", "begzodfaezullaev", "mruptime", "camdenlovesriolu", "edenzk", "terrafield", "geniusbuy", "secretoftim"].includes(user.name.toLowerCase());
    if (!isAdmin) {
      return res.status(403).json({ error: "Forbidden" });
    }
    res.json({ emails: adminEmails, isAdmin: true });
  });

  app.post("/api/admin/emails", (req, res) => {
    const { email } = req.body;
    const sessionToken = req.headers.authorization;
    if (!sessionToken || !sessions[sessionToken]) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const user = sessions[sessionToken];
    const isAdmin = user.email && adminEmails.includes(user.email.toLowerCase()) || ["byfrosty", "frosty_2", "begzod2211", "begzodfaezullaev", "mruptime", "camdenlovesriolu", "edenzk", "terrafield", "geniusbuy", "secretoftim"].includes(user.name.toLowerCase());
    if (!isAdmin) {
      return res.status(403).json({ error: "Forbidden" });
    }
    if (email && !adminEmails.includes(email.toLowerCase())) {
      adminEmails.push(email.toLowerCase());
    }
    res.json({ success: true, emails: adminEmails });
  });

  app.delete("/api/admin/emails", (req, res) => {
    const { email } = req.body;
    const sessionToken = req.headers.authorization;
    if (!sessionToken || !sessions[sessionToken]) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const user = sessions[sessionToken];
    const isAdmin = user.email && adminEmails.includes(user.email.toLowerCase()) || ["byfrosty", "frosty_2", "begzod2211", "begzodfaezullaev", "mruptime", "camdenlovesriolu", "edenzk", "terrafield", "geniusbuy", "secretoftim"].includes(user.name.toLowerCase());
    if (!isAdmin) {
      return res.status(403).json({ error: "Forbidden" });
    }
    if (email !== "begzodfaezullaev@gmail.com") {
      adminEmails = adminEmails.filter(e => e !== email.toLowerCase());
    }
    res.json({ success: true, emails: adminEmails });
  });

  app.get("/api/roblox/session", (req, res) => {
    const sessionToken = req.headers.authorization;
    if (!sessionToken || !sessions[sessionToken]) {
      return res.status(401).json({ valid: false });
    }
    const user = sessions[sessionToken];
    const isAdmin = user.email && adminEmails.includes(user.email.toLowerCase()) || ["byfrosty", "frosty_2", "begzod2211", "begzodfaezullaev", "mruptime", "camdenlovesriolu", "edenzk", "terrafield", "geniusbuy", "secretoftim"].includes(user.name.toLowerCase());
    res.json({ valid: true, user: { ...user, isAdmin } });
  });
`;

code = code.replace(/app\.get\("\/api\/roblox\/session".*?\}\);/s, adminEndpoints);

fs.writeFileSync('server.ts', code);
