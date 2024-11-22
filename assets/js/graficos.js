

// LA PARTE DE GRAFICOS DE SERVICIOS MEDIOAMBIENTALES y DE SANEAMIENTO

document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('lineChart').getContext('2d');
  const lineChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'],
          datasets: [
              {
                  label: 'Preservación de la vida acuática',
                  data: [20, 30, 35, 40, 50, 60, 70, 80],
                  borderColor: 'rgba(0, 255, 0, 1)',
                  backgroundColor: 'rgba(0, 255, 0, 0.2)',
                  borderWidth: 2,
                  fill: false
              },
              {
                  label: 'Garantía de calidad del agua',
                  data: [10, 20, 25, 30, 45, 55, 65, 70],
                  borderColor: 'rgba(0, 128, 255, 1)',
                  backgroundColor: 'rgba(0, 128, 255, 0.2)',
                  borderWidth: 2,
                  fill: false
              },
              {
                  label: 'Cumplimiento con normativas ambientales',
                  data: [5, 15, 20, 35, 55, 60, 75, 90],
                  borderColor: 'rgba(173, 255, 47, 1)',
                  backgroundColor: 'rgba(173, 255, 47, 0.2)',
                  borderWidth: 2,
                  fill: false
              }
          ]
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true,
                  max: 100
              }
          }
      }
  });
});



const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // Tipo de gráfico
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'],
        datasets: [
            {
                label: 'Precisión y fiabilidad',
                data: [20, 25, 30, 35, 40, 60, 80, 90],
                backgroundColor: 'rgba(128, 0, 128, 0.6)', // Color morado
                borderColor: 'rgba(128, 0, 128, 1)',
                borderWidth: 1
            },
            {
                label: 'Certificaciones y cumplimiento normativo',
                data: [15, 20, 35, 45, 55, 65, 85, 95],
                backgroundColor: 'rgba(0, 0, 255, 0.6)', // Color azul oscuro
                borderColor: 'rgba(0, 0, 255, 1)',
                borderWidth: 1
            },
            {
                label: 'Adaptabilidad a diversas industrias',
                data: [10, 15, 25, 50, 70, 75, 90, 100],
                backgroundColor: 'rgba(0, 191, 255, 0.6)', // Color azul claro
                borderColor: 'rgba(0, 191, 255, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        animation: {
            duration: 2000, // Duración de la animación en milisegundos
            easing: 'easeOutBounce', // Efecto de rebote al final
            onComplete: function() {
                console.log('Animación completada');
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});


const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
const doughnutChart = new Chart(doughnutCtx, {
    type: 'doughnut',
    data: {
        labels: ['Monitoreo continuo', 'Evaluación de gases tóxicos', 'Mitigación de riesgos ambientales'],
        datasets: [{
            data: [80, 45, 60],
            backgroundColor: [
                'rgba(0, 162, 255, 0.6)', // Color azul para Monitoreo continuo
                'rgba(255, 165, 0, 0.6)', // Color naranja para Evaluación de gases tóxicos
                'rgba(255, 99, 132, 0.6)' // Color rojo para Mitigación de riesgos ambientales
            ],
            borderColor: [
                'rgba(0, 162, 255, 1)',
                'rgba(255, 165, 0, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
      animation: {
          duration: 1500, // Duración total de la animación en milisegundos
          easing: 'easeOutElastic', // Efecto de elasticidad al final de la animación
          // Personalización de la animación de entrada
          onEnter: {
              from: {
                  scale: 0.5, // Escala inicial
                  rotate: 180 // Rotación inicial
              },
              to: {
                  scale: 1, // Escala final
                  rotate: 0 // Rotación final
              }
          },
          // Personalización de la animación de salida
          onLeave: {
              to: {
                  scale: 0.5, // Escala al salir
                  rotate: 180 // Rotación al salir
              }
          },
          // Función que se ejecuta al completar la animación
          onComplete: function() {
              console.log('Animación completada');
          }
      },
      plugins: {
          legend: {
              position: 'bottom'
          }
      }
  }
  
  
});
const chartContext = document.getElementById('myNewChart').getContext('2d');
        const waterTreatmentChart = new Chart(chartContext, {
            type: 'line', // Tipo de gráfico 
            data: {
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'],
                datasets: [
                    {
                        label: 'Mejora en la eficiencia',
                        data: [10, 15, 20, 25, 30, 35, 40, 50],
                        backgroundColor: 'rgba(0, 255, 255, 0.6)', // Color cian claro
                        borderColor: 'rgba(0, 255, 255, 1)',
                        borderWidth: 2,
                        pointStyle: 'circle',
                        pointRadius: 5,
                        fill: false
                    },
                    {
                        label: 'Reducción de contaminantes',
                        data: [10, 15, 25, 30, 35, 40, 45, 55],
                        backgroundColor: 'rgba(0, 0, 139, 0.6)', // Color azul oscuro
                        borderColor: 'rgba(0, 0, 139, 1)',
                        borderWidth: 2,
                        pointStyle: 'diamond',
                        pointRadius: 5,
                        fill: false
                    },
                    {
                        label: 'Sostenibilidad y cumplimiento normativo',
                        data: [10, 15, 20, 30, 40, 45, 50, 60],
                        backgroundColor: 'rgba(0, 128, 0, 0.6)', // Color verde
                        borderColor: 'rgba(0, 128, 0, 1)',
                        borderWidth: 2,
                        pointStyle: 'rect',
                        pointRadius: 5,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                animation: {
                    duration: 2000, // Duración de la animación en milisegundos
                    easing: 'easeOutBounce', // Efecto de rebote al final
                    onComplete: function() {
                        console.log('Animación completada');
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 60,
                        title: {
                            display: true,
                            text: 'Puntuación'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            font: {
                                size: 12
                            }
                        }
                    }
                }
            }
        });

        const restorationContext = document.getElementById('restorationChart').getContext('2d');
        const restorationChart = new Chart(restorationContext, {
            type: 'line', // Tipo de gráfico
            data: {
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'],
                datasets: [
                    {
                        label: 'Recuperación de ecosistemas',
                        data: [10, 15, 20, 25, 30, 35, 40, 50],
                        backgroundColor: 'rgba(144, 238, 144, 0.7)', // Color verde claro
                        borderColor: 'rgba(144, 238, 144, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Mejora de la calidad del agua',
                        data: [8, 12, 18, 22, 28, 34, 42, 55],
                        backgroundColor: 'rgba(0, 128, 255, 0.7)', // Color azul
                        borderColor: 'rgba(0, 128, 255, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Prevención de futuros daños',
                        data: [5, 10, 15, 20, 25, 30, 35, 45],
                        backgroundColor: 'rgba(255, 99, 132, 0.7)', // Color rojo claro
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                animation: {
                    duration: 1500, // Duración de la animación
                    easing: 'easeInOutQuad', // Efecto de entrada y salida
                    onComplete: function() {
                        console.log('Animación de barras completada');
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 60,
                        title: {
                            display: true,
                            text: 'Puntuación'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                size: 12
                            }
                        }
                    }
                }
            }
        });

        const bioContext = document.getElementById('bioremediationChart').getContext('2d');
        const bioremediationChart = new Chart(bioContext, {
            type: 'line', // Tipo de gráfico
            data: {
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'],
                datasets: [
                    {
                        label: 'Restauración ecológica',
                        data: [10, 15, 20, 25, 30, 35, 40, 45],
                        backgroundColor: 'rgba(144, 238, 144, 0.7)', // Verde claro
                        borderColor: 'rgba(144, 238, 144, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Reducción de contaminantes',
                        data: [15, 20, 25, 30, 35, 40, 45, 50],
                        backgroundColor: 'rgba(0, 0, 255, 0.7)', // Azul
                        borderColor: 'rgba(0, 0, 255, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Soluciones sostenibles',
                        data: [20, 30, 35, 40, 50, 55, 60, 70],
                        backgroundColor: 'rgba(0, 206, 209, 0.7)', // Azul turquesa
                        borderColor: 'rgba(0, 206, 209, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                animation: {
                    duration: 1500, // Duración de la animación
                    easing: 'easeInOutQuad'
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 140,
                        stacked: true, // Activa las barras apiladas
                        title: {
                            display: true,
                            text: 'Puntuación'
                        }
                    },
                    x: {
                        stacked: true // Activa las barras apiladas en el eje X también
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                size: 12
                            }
                        }
                    }
                }
            }
        });

        const optimizationContext = document.getElementById('optimizationChart').getContext('2d');
        const optimizationChart = new Chart(optimizationContext, {
            type: 'bar', // Tipo de gráfico
            data: {
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'],
                datasets: [
                    {
                        label: 'Mejora de la eficiencia del tratamiento',
                        data: [10, 12, 15, 18, 20, 25, 30, 35],
                        backgroundColor: 'rgba(0, 255, 255, 0.7)', // Color cian claro
                        borderColor: 'rgba(0, 255, 255, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Reducción del uso de productos químicos',
                        data: [8, 10, 12, 15, 18, 22, 28, 30],
                        backgroundColor: 'rgba(0, 0, 139, 0.7)', // Azul oscuro
                        borderColor: 'rgba(0, 0, 139, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Sostenibilidad y cumplimiento ambiental',
                        data: [5, 10, 15, 20, 25, 30, 35, 40],
                        backgroundColor: 'rgba(0, 128, 128, 0.7)', // Turquesa oscuro
                        borderColor: 'rgba(0, 128, 128, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                animation: {
                    duration: 1500, // Duración de la animación
                    easing: 'easeInOutQuad'
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 50,
                        title: {
                            display: true,
                            text: 'Puntuación'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                size: 12
                            }
                        }
                    }
                }
            }
        });