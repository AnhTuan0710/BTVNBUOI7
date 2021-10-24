function giaiPT()
{
    var a= parseInt(document.getElementById('soA').value,10);
    var b= parseInt(document.getElementById('soB').value,10);
    var c= parseInt(document.getElementById('soC').value,10);
    var delta;
    delta = b*b - 4*a*c;
    var x1, x2, x;
    var text;

    if(delta<0)
    {
        text= 'Phuong trinh vo nghiem';
    }
    else
    {
        if(delta == 0 )
        {
            x= -b / 2*a;
            text= 'Phuong trinh co nghiem kep la: X= ' + x;
        }
        else
        {
            x1 = (-b + Math.sqrt(delta)) / (2 * a);
            x2 = (-b - Math.sqrt(delta)) / (2 * a);

            text ='Phuong trinh co 2 nghiem: x1 = ' + x1.toFixed(2) + ' va ' + 'x2 = ' + x2.toFixed(2);
        }
    }
    document.getElementById('kqua').value= text;
}
function ktra()
{
    var n = parseInt(document.getElementById('soN').value, 10);
    var text;
    var dem=0;
    var i = 1;
    if (n > 1) {
        for (i = 1; i <= n; i++) {
            if (n % i == 0) {
                dem++;
            }
        }
        if (dem == 2) {
            text2 = 'So ' + n + ' la so Nguyen To';
        } else {
            text2 = 'So ' + n + ' Khong Phai la so Nguyen To';
        }
    } else {
        text2 = 'So ' + n + ' Khong Phai la so Nguyen To ( n > 1)';
    }
    document.getElementById('kqua2').value = text2;
}