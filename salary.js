let prompt = require('prompt-sync')();
// Get the inputs from the user
const basicSalary = parseInt(prompt("Enter your basic salary:"));
const benefits = parseInt(prompt("Enter your benefits:"));



// Import the KRA, NHIF, and NSSF values from the provided link
const KRA_VALUES = [
 { taxableIncomeRange: 0, taxableIncomeRate: 10 },
 { taxableIncomeRange: 24000, taxableIncomeRate: 25 },
 { taxableIncomeRange: 32333, taxableIncomeRate: 30 },
];

const NHIF_RATE = 6;
const NSSF_RATE = 6;

// Calculate the tax payee 
const payee = calculatePayee(grossSalary);

function calculatePayee(taxableIncome) {
 for (const KRA_VALUE of KRA_VALUES) {
    if (taxableIncome <= KRA_VALUE.taxableIncomeRange) {
      return (taxableIncome * KRA_VALUE.taxableIncomeRate) / 100;
    }
 }

 // If the taxable income is greater than the highest KRA range, then the payee is 30%
 return (taxableIncome * 30) / 100;
}

// Calculate the NHIF deductions
const NHIFDeductions = calculateNHIFDeductions(grossSalary);
function calculateNHIFDeductions(salary) {
 return (salary * NHIF_RATE) / 100;
}

// Calculate the NSSF deductions
const NSSFDeductions = calculateNSSFDeductions(grossSalary);
function calculateNSSFDeductions(salary) {
 return (salary * NSSF_RATE) / 100;
}

// Calculate the gross salary
const grossSalary = calculateGrossSalary(basicSalary, benefits);
function calculateGrossSalary(basicSalary, benefits) {
 return basicSalary + benefits;
}

// Calculate the net salary
const netSalary = calculateNetSalary(grossSalary, payee, NHIFDeductions, NSSFDeductions);
function calculateNetSalary(grossSalary, payee, NHIFDeductions, NSSFDeductions) {
 return grossSalary - payee - NHIFDeductions - NSSFDeductions;
}  
   //call out functions
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Payee: ${payee}`);
    console.log(`NHIF Deductions: ${NHIFDeductions}`);
    console.log(`NSSF Deductions: ${NSSFDeductions}`);
    console.log(`Net Salary: ${netSalary}`);