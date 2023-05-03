import sqlite3

def add_user(username, password):
    conn = sqlite3.connect('mydatabase.db')
    print(conn)
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO users (username, password) VALUES (?, ?)", 
        (username, password)
    )
    conn.commit()
    cursor.close()
    conn.close()

def find_user(username, password):
    conn = sqlite3.connect('mydatabase.db')
    cursor = conn.cursor()
    cursor.execute(
        "SELECT * FROM users WHERE username = ? AND password = ?", 
        (username, password)
    )
    fetched = cursor.fetchone()
    cursor.close()
    conn.close()
    return fetched