CREATE DATABASE IF NOT EXISTS BankingDB;
USE BankingDB;

-- Users Table
CREATE TABLE IF NOT EXISTS Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15) UNIQUE
);

-- Bank Accounts Table
CREATE TABLE IF NOT EXISTS Bank_Accounts (
    account_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    account_number VARCHAR(20) UNIQUE NOT NULL,
    bank_name VARCHAR(100),
    account_type ENUM('Checking', 'Savings', 'Business'),
    balance DECIMAL(15,2) DEFAULT 0.00,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

-- Cards Table
CREATE TABLE IF NOT EXISTS Cards (
    card_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    bank_account_id INT,
    card_number VARCHAR(16) UNIQUE NOT NULL,
    card_type ENUM('Credit', 'Debit'),
    expiration_date DATE,
    cvv VARCHAR(4),
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (bank_account_id) REFERENCES Bank_Accounts(account_id) ON DELETE CASCADE
);

-- Transactions Table (Daily Expenses)
CREATE TABLE IF NOT EXISTS Transactions (
    transaction_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    account_id INT,
    amount DECIMAL(10,2),
    transaction_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    transaction_type ENUM('Deposit', 'Withdrawal', 'Payment', 'Transfer'),
    description TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (account_id) REFERENCES Bank_Accounts(account_id) ON DELETE CASCADE
);

-- Recurring Charges Table
CREATE TABLE IF NOT EXISTS Recurring_Charges (
    charge_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    account_id INT,
    amount DECIMAL(10,2),
    charge_date DATE,
    frequency ENUM('Weekly', 'Monthly', 'Yearly'),
    description TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (account_id) REFERENCES Bank_Accounts(account_id) ON DELETE CASCADE
);

INSERT INTO Users (name, email, phone)
VALUES ('Shelly', 'shelly@example.com', '123-456-7890');

-- Insert Shelly's Bank Account
INSERT INTO Bank_Accounts (user_id, account_number, bank_name, account_type, balance)
VALUES (1, '123456789012', 'Bank of America', 'Checking', 5000.00);

-- Insert Shelly's Credit Card
INSERT INTO Cards (user_id, bank_account_id, card_number, card_type, expiration_date, cvv)
VALUES (1, 1, '4111111111111111', 'Credit', '2027-06-01', '123');
TRUNCATE TABLE Recurring_Charges;
-- Insert Shelly's Recurring Charges (Netflix Subscription)
INSERT INTO Recurring_Charges (user_id, account_id, amount, charge_date, frequency, description)
VALUES (1, 1, 15.99, '2025-02-01', 'Monthly', 'Netflix Subscription'),
 (1, 1, 700.02, '2025-02-09', 'Monthly', 'Rent');

-- Insert Shelly's Daily Expenses
INSERT INTO Transactions (user_id, account_id, amount, transaction_type, description)
VALUES 
(1, 1, 50.00, 'Payment', 'Grocery shopping'),
(1, 1, 20.00, 'Payment', 'Coffee shop'),
(1, 1, 100.00, 'Withdrawal', 'ATM cash withdrawal');