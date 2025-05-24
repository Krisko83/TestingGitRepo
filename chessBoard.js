function chessBoard(n) {

    let result = '';
    let counter = 0;    

    console.log('<div class="chessboard">');

    for (let col = 1; col <= n; col++) {
   
        console.log('  <div>');
        result = '';

        for (let line = 1; line <= n; line++) {
            counter++;
            if ((col % 2 !== 0 && line % 2 !== 0) || (col % 2 === 0 && line % 2 === 0)) { //Ako col i line са четни или нечетни едновременно!!!
                if (counter === n) {
                    result += '    <span class="black"></span>';
                } else {
                    result += '    <span class="black"></span>\n';
                }
            } else {                                                            // Ако col i line са различни(едното е четно другото нечетно)!!!
                if (counter === n) {
                    result += '    <span class="white"></span>';
                } else {
                    result += '    <span class="white"></span>\n';
                }
            }
        }

        counter = 0;

        console.log(`${result}`);
        console.log('  </div>');
    }

    console.log('</div>');

};