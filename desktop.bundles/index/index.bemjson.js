({
  block: 'b-page',
  title: 'Тестовое задание "Яндекс"',
  favicon: '/favicon.ico',
  head: [
    { elem: 'css', url: '_index.css', ie: false },
    { elem: 'css', url: '_index', ie: true },
    { block: 'i-jquery', elem: 'core' },
    { elem: 'js', url: '_index.js' },
    { elem: 'meta', attrs: { name: 'description', content: '' }},
    { elem: 'meta', attrs: { name: 'keywords', content: '' }}
  ],
  content:[
    {
      block: 'b-header',
      content: [
        {
          elem: 'logo',
          tag: 'a',
          attrs: { href: 'http://yandex.ru' },
          content: {
            tag: 'img',
            attrs: { src: 'http://yandex.st/lego/_/X31pO5JJJKEifJ7sfvuf3mGeD_8.png' }
          }
        },
        {
          elem: 'site-name',
          content: 'Верстальщик. Тестовое задание'
        }
      ]
    },
    {
      block: 'b-content',
      content: [
        {
          block: 'b-task',
          content: [
            {
              block: 'b-static-text',
              content: {
                tag: 'h2',
                content: 'Небольшой текст в пару твитов'
              }
            },
            {
              block: 'b-column',
              content: [
                {
                  elem: 'column',
                  content: {
                    tag: 'table',
                    content: [
                      {
                        tag: 'tr',
                        content: {
                          tag: 'td',
                          attrs: { style: 'font-size: 20px; color: #000;' },
                          content: '<font size="5" color="red" face="Arial">Р</font>аньше'
                        }
                      },
                      {
                        tag: 'tr',
                        content: {
                          tag: 'td',
                          content: '<font size="3" color="black" face="Arial">В древние времена, люди верстали примерно так, и в коде был страшный бардак.</font>'
                        }
                      },
                      {
                        tag: 'tr',
                        content: {
                          tag: 'td',
                          attrs: { style: 'padding-top: 6px;' },
                          content: '<font size="3" color="black" face="Arial">Это пример старого кода.</font>'
                        }
                      }
                    ]
                  }
                },
                {
                  elem: 'column2',
                  content: [
                    {
                      block: 'b-now',
                      tag: 'section',
                      content: [
                        {
                          tag: 'h3',
                          content: 'Сейчас'
                        },
                        {
                          tag: 'p',
                          content: 'В настоящее время люди стремяться к семантике, все стремяться создать идеальный код.'
                        },
                        {
                          tag: 'p',
                          content: 'Это пример нового кода.'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          block: 'b-task',
          content: [
            {
              block: 'b-static-text',
              content: [
                {
                  tag: 'h2',
                  content: 'Сверстайте контрол оценки и показа рейтинга'
                },
                {
                  tag: 'p',
                  content: 'Практически все наши контролы должны быть очень гибкими к окружающему пространству, должны уметь располагаться на любом фоне и при желании легко менять свой "скин". Учитывайте это в этом и других заданиях.'
                },
                {
                  tag: 'p',
                  content: 'Обратите внимание, что контрол должен не только выставлять оценку, но и показывать текущую.'
                }
              ]
            },
            {
              block: 'b-green',
              content: {
                block: 'b-rating',
                js: { rating: 2 }
              }
            },
            {
              block: 'b-red',
              content: {
                block: 'b-rating',
                js: { rating: 4, alert: true }
              }
            },
            {
              block: 'b-white',
              content: {
                block: 'b-rating',
                js: { rating: 1 }
              }
            }
            
          ]
        },
        {
          block: 'b-task',
          content: [
            {
              block: 'b-static-text',
              content: [
                {
                  tag: 'h2',
                  content: 'Сверстайте прогресс-бар'
                }
              ]
            },
            {
              block: 'b-green',
              content: {
                block: 'b-progress',
                content: '80'    
              }
            },
            {
              block: 'b-red',
              content: {
                block: 'b-progress',
                content: '30' 
              }
            },
            {
              block: 'b-white',
              content: {
                block: 'b-progress',
                content: '55'
              }
            }
          ]
        },
        {
          block: 'b-task',
          content: [
            {
              block: 'b-static-text',
              content: [
                {
                  tag: 'h2',
                  content: 'Сверстайте кнопку'
                },
                {
                  tag: 'p',
                  content: 'Пожалуйста, учитывайте, что эта кнопка должна быть кнопкой-на-все-случаи-жизни. Сделайте несколько примеров кнопки в различном окружении и различном html-представлении.'
                }
              ]
            },
            {
              block: 'b-green',
              content: {
                block: 'b-button',
                content: 'Просто кнопка'
              }
            },
            {
              block: 'b-red',
              content: [
                {
                  block: 'b-button',
                  content: 'Кнопка Submit',
                  type: 'submit',
                  name: 'knopka',
                  value: 'значение'
                },
                {
                  elem: 'margin',
                  content: {
                    block: 'b-button',
                    content: 'Ссылка на Мой круг',
                    url: 'http://mrlogaz.moikrug.ru/'
                  }
                },
                {
                  block: 'b-button',
                  content: 'Всплывающее окно',
                  alert: 'Текст всплывашки'
                }
              ]
            }
          ]
        },
        {
          block: 'b-task',
          content: [
            {
              block: 'b-static-text',
              content: [
                {
                  tag: 'h2',
                  content: 'Сверстайте список из иконок'
                },
                {
                  tag: 'p',
                  content: 'Список должен занимать всю ширину родителя, расстояние между последней иконкой и предпоследней должно занимать все свободное пространство. Иконки должны быть прозрачными (png24).'
                },
                {
                  tag: 'p',
                  content: 'В случае если пользователь отключил картинки или они по какой-то причине не загрузились, интерфейс должен отреагировать на это оформленным текстом.'
                }
              ]
            },
            {
              block: 'b-browser',
              js: true,
              content: [
                {
                  elem: 'block',
                  mix: { elem: 'chrome' },
                  content: [
                    {
                      elem: 'load',
                      tag: 'img',
                      attrs: { src: '../../desktop.blocks/b-browser/__chrome/b-browser__chrome.png' },
                    },
                    {
                      elem: 'text',
                      content: [
                        {
                          tag: 'span',
                          attrs: { style: 'color: #090' },
                          content: 'Ch'
                        },
                        {
                          tag: 'span',
                          attrs: { style: 'color: #f00' },
                          content: 'ro'
                        },
                        {
                          tag: 'span',
                          attrs: { style: 'color: #f90' },
                          content: 'me'
                        }
                      ]
                    }
                  ]
                },
                {
                  elem: 'block',
                  mix: { elem: 'ffox' },
                  content: [
                    {
                      elem: 'load',
                      tag: 'img',
                      attrs: { src: '../../desktop.blocks/b-browser/__ffox/b-browser__ffox.png' }
                    },
                    {
                      elem: 'text',
                      content: 'Firefox'
                    }
                  ]
                },
                {
                  elem: 'block',
                  mix: { elem: 'opera' },
                  content: [
                    {
                      elem: 'load',
                      tag: 'img',
                      attrs: { src: '../../desktop.blocks/b-browser/__opera/b-browser__opera.png' }
                    },
                    {
                      elem: 'text',
                      content: 'Opera'
                    }
                  ]
                },
                {
                  elem: 'block',
                  mix: { elem: 'safari' },
                  content: [
                    {
                      elem: 'load',
                      tag: 'img',
                      attrs: { src: '../../desktop.blocks/b-browser/__safari/b-browser__safari.png' }
                    },
                    {
                      elem: 'text',
                      content: 'Safari'
                    }
                  ]
                },
                {
                  elem: 'block',
                  mix: { elem: 'ie' },
                  content: [
                    {
                      elem: 'load',
                      tag: 'img',
                      attrs: { src: '../../desktop.blocks/b-browser/__ie/b-browser__ie.png' }
                    },
                    {
                      elem: 'text',
                      content: 'Internet Explorer'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          block: 'b-task',
          content: [
            {
              block: 'b-static-text',
              content: {
                tag: 'h2',
                content: 'Сверстайте текст'
              }
            },
            {
              block: 'b-column',
              mix: { block: 'b-static-text' },
              content: [
                {
                  tag: 'h3',
                  content: 'Тема: «Сюжетный анапест:<br/>основные моменты»'
                },
                {
                  elem: 'column',
                  
                  content: [
                    {
                      tag: 'p',
                      content: 'Нельзя восстановить истинной хронологической последовательности событий, потому что мелькание мыслей параллельно. Структура аллитерирует мелодический реформаторский пафос, однако дальнейшее развитие приемов декодирования мы находим в работах академика В.Виноградова. Аллюзия наблюдаема. Аллитерация, как бы это ни казалось парадоксальным, параллельна. Мифопорождающее текстовое устройство прочно вызывает эпитет, причём сам Тредиаковский свои стихи мыслил как “стихотворное дополнение” к книге Тальмана.'
                    },
                    {
                      tag: 'p',
                      content: 'Речевой акт традиционно осознаёт музыкальный дольник, но не рифмами. Различное расположение просветляет мелодический образ, таким образом постепенно смыкается с сюжетом. Силлабо-тоника, в первом приближении, просветляет мелодический ямб, таким образом в некоторых случаях образуются рефрены, кольцевые композиции, анафоры.'
                    }
                  ]
                },
                {
                  elem: 'column2',
                  content: [
                    {
                      tag: 'p',
                      content: 'Представленный лексико-семантический анализ является психолингвистическим в своей основе, но мифопорождающее текстовое устройство аллитерирует мифологический генезис свободного стиха, об этом свидетельствуют краткость и завершенность формы, бессюжетность, своеобразие тематического развертывания.'
                    },
                    {
                      tag: 'p',
                      content: 'Драма, по определению отражает брахикаталектический стих, хотя в существование или актуальность этого он не верит, а моделирует собственную реальность. Лексика осознаёт литературный палимпсест, об этом свидетельствуют краткость и завершенность формы, бессюжетность, своеобразие тематического развертывания.'
                    },
                    {
                      tag: 'ul',
                      content: [
                        {
                          tag: 'li',
                          content: 'Курит ли трупка мой'
                        },
                        {
                          tag: 'li',
                          content: {
                            tag: 'a',
                            attrs: { href: '#' },
                            content: 'из трупка тфой пихтишь'
                          }
                        },
                        {
                          tag: 'li',
                          content: {
                            block: 'b-ps-link',
                            tag: 'a',
                            content: 'Или мой кафе пил'
                          }
                        },
                        {
                          tag: 'li',
                          content: 'тфой в щашешка сидишь'
                        }
                      ]
                    }
                  ]
                }
              ]
            }           
          ]
        }
      ]
    }
  ]
})
