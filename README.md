# תיעוד של מנהל משימות בזמן אמת 🥇
## מבוא
יישום זה הוא מנהל משימות בזמן אמת שמאפשר למשתמשים להוסיף ולמחוק משימות בזמן אמת באמצעות Socket.IO. הוא מורכב משרת Node.js וממשק HTML, CSS ו-JavaScript בצד הלקוח.

## הרצת היישום מקומית
כדי להריץ את היישום מקומית, עקוב אחר השלבים הבאים:

וודא שיש לך את Node.js מותקן על המחשב שלך.
העתק את המאגר המקורי של הקוד.
נווט אל תיקיית הפרויקט בטרמינל שלך.
התקן את התלות על ידי הרצת npm install.
הפעל את השרת על ידי הרצת node server.js.
פתח דפדפן ונווט לכתובת http://localhost:27016.
## הסבר על הקוד
בצד השרת (server.js)
השרת נוצר באמצעות Express.js עם שרת HTTP בסיסי.
משתמש ב-Socket.IO כדי להקים חיבור WebSocket בין השרת והלקוחות לתקשורת בזמן אמת.
משתמשים במערך tasks כדי לאחסן את רשימת המשימות.
בצד הלקוח (index.html & client.js)
קובץ ה-HTML מכיל את מבנה העמוד, כולל שדות קלט ורשימות משימות.
ה-JavaScript בצד הלקוח (client.js) פועל עם השרת באמצעות Socket.IO לשליחה וקבלה של נתונים הקשורים למשימות.
כאשר מוספה משימה חדשה, הלקוח שולח את טקסט המשימה לשרת, שמפרסם את העדכון לכל הלקוחות המחוברים.
כאשר מוחקים משימה, הלקוח שולח את מזהה המשימה לשרת, שמסיר את המשימה מהרשימה ומעדכן את כל הלקוחות המחוברים.🚀
