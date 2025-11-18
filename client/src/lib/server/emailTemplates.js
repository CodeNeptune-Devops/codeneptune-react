// src/lib/server/emailTemplates.js

/**
 * Email templates stored as strings (Vercel-compatible)
 * No file system access needed
 */

const templates = {
  contact: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px;
      text-align: center;
      border-radius: 10px 10px 0 0;
    }
    .content {
      background: #f9f9f9;
      padding: 30px;
      border: 1px solid #e0e0e0;
    }
    .field {
      margin-bottom: 20px;
      padding: 15px;
      background: white;
      border-radius: 5px;
      border-left: 4px solid #667eea;
    }
    .label {
      font-weight: bold;
      color: #667eea;
      margin-bottom: 5px;
    }
    .value {
      color: #333;
    }
    .footer {
      text-align: center;
      padding: 20px;
      color: #666;
      font-size: 12px;
      background: #f0f0f0;
      border-radius: 0 0 10px 10px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>📬 New Contact Form Submission</h1>
    <p>{{formType}}</p>
  </div>
  
  <div class="content">
    <div class="field">
      <div class="label">👤 Full Name</div>
      <div class="value">{{fullName}}</div>
    </div>
    
    <div class="field">
      <div class="label">📧 Email</div>
      <div class="value">{{email}}</div>
    </div>
    
    <div class="field">
      <div class="label">📱 Phone Number</div>
      <div class="value">{{phoneNumber}}</div>
    </div>
    
    <div class="field">
      <div class="label">🛠️ Service Interested In</div>
      <div class="value">{{service}}</div>
    </div>
    
    <div class="field">
      <div class="label">🔍 How They Found Us</div>
      <div class="value">{{foundUs}}</div>
    </div>
    
    <div class="field">
      <div class="label">💬 Message</div>
      <div class="value">{{message}}</div>
    </div>
    
    <div class="field">
      <div class="label">🌐 Submitted From</div>
      <div class="value">{{submittedFrom}}</div>
    </div>
  </div>
  
  <div class="footer">
    <p>This email was sent from your website contact form</p>
    <p>Please respond to the customer at: {{email}}</p>
  </div>
</body>
</html>
  `
};

/**
 * Get email template by type
 * @param {string} type - Template type
 * @returns {string|null} HTML template
 */
export function getEmailTemplate(type) {
  return templates[type] || null;
}

/**
 * Add new template dynamically
 * @param {string} type - Template type
 * @param {string} html - HTML content
 */
export function addTemplate(type, html) {
  templates[type] = html;
}