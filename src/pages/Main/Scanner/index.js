import React, { useEffect } from 'react';

import Quagga from 'quagga';

import { validateIsbn } from '../../../services/books';

import { Video } from './styles';

function Scanner() {
  let scannerAttemps = 0;

  const onDetected = result => {
    Quagga.offDetected(onDetected);

    const isbn = result.codeResult.code;

    if (validateIsbn(isbn)) {
      // Consultar Api
      alert(isbn);
    } else if (scannerAttemps >= 5) {
      alert(
        'Não é possivel ler o código do livro. Por favor, tente novamente.'
      );
    }

    scannerAttemps++;
    Quagga.onDetected(onDetected);
  };

  useEffect(() => {
    // Para abrir a camera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      Quagga.init(
        {
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: document.querySelector('#video'),
            constraints: {
              facingMode: 'environment',
            },
          },
          numOfWorkers: 1,
          locate: true,
          decoder: {
            readers: ['ean_reader'],
          },
        },
        err => {
          if (err) {
            console.error(err);
            alert(
              'Erro ao abrir a camera do dispositivo. Favor habilitar a camera'
            );
          }
          Quagga.start();
        },
        Quagga.onDetected(onDetected)
      );
    }
  }, []);

  return <Video id="video" />;
}

export default Scanner;
