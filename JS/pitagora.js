function pitagora() {

    document.write('<table border=1 cellpadding = 10>');

    for (let i = 1; i <= 10; i++) {

        document.write('<tr>');

        for (let j = 1; j <= 10; j++) {

            document.write('<td>');
            document.write(i * j);
            document.write('</td>');
        }

        document.write('</tr>');
    }

    document.write('</table>');
}