$(document).ready(function() {
    //Establishes company data
    function Company(n, mc, s, p, e)
    {
    this.name = n;
    this.marketcap = mc;
    this.sales = s;
    this.profit = p;
    this.employees = e;
    }

    var company1 = new Company("Microsoft", "$381.7b", "$86.8b", "$22.1b", "128,000");
    var company2 = new Company("Symetra Financial", "$2.7b", "$2.2b", "$254.4m", "1,400");
    var company3 = new Company("Micron Technology", "$37.6b", "$16.4b", "$3.0b", "30,400");
    var company4 = new Company("F5 Networks", "$9.5b", "1.7b", "$311.2m", "3,834");
    var company5 = new Company("Expedia", "$10.8b", "$5.8b", "$398.1m", "18,210");
    var company6 = new Company("Nautilus", "$476m", "$274.4m", "$18.8m", "340");
    var company7 = new Company("Heritage Financial", "$531m", "$137.6m", "21m", "748");
    var company8 = new Company("Cascade Microtech", "239m", "136m", "$9.9m", "449");
    var company9 = new Company("Nike", "$83.1b", "$27.8b", "$2.7b", "56,500");
    var company10 = new Company("Alaska Air Group", "$7.9b", "$5.4b", "605m", "13,952");

    var companies=[company1,company2,company3,company4,company5,company6,company7,company8,company9,company10];

    var tb = document.getElementById("company-data");

    tb.innerHTML = "<th>Company Name</th> <th>Market Capital</th> <th>Sales</th> <th>Profit</th> <th>Employees</th>";

    companies.forEach(displayCompanyData);

    function displayCompanyData(company)
    {
    tb.innerHTML += "<tr><td>"+company.name+"</td><td>"+company.marketcap+"</td><td>"
    +company.sales+"</td><td>"+company.profit+"</td><td>"+company.employees+"</td></tr>";
    }
});