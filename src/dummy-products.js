import python from './assets/mocha-overcoat.jpg';
import react from './assets/dream-gown.jpg';
import go from './assets/rain-jacket.jpg';
import vue from './assets/merlot-suit.jpg';
import ruby from './assets/moonlight-dress.jpg';
import angular from './assets/denim-pioneer.jpg';

export const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    image: python,
    title: 'Python',
    price: 129.99,
    description:
      'Python is a high-level, interpreted programming language known for its readability and simplicity. It supports multiple programming and functional programming. Python is widely used for web development, data analysis, .',
  },
  {
    id: 'p2',
    image: react,
    title: 'React',
    price: 189.99,
    description:
      'React is a popular JavaScript library for building user interfaces, particularly single-page applications. Developed and maintained by  of applications efficiently. It uses a virtual .',
  },

  {
    id: 'p3',
    image: go,
    title: 'Go (Golang)',
    price: 49.99,
    description:
      'Go, also known as Golang, is a statically typed, compiled programming language designed by Google. It emphasizes simplicity, suited for building scalable and concurrent systems. Go is often used for backend d.',
  },
  {
    id: 'p4',
    image: vue,
    title: 'Vue js',
    price: 249.99,
    description:
    'Vue.js is a progressive JavaScript framework used for building user interfaces and single-page applications. It is designed to be  into projects gradually. Vue.js emphasizes simplicity and flexibility, with a .',
    },
    {
    id: 'p5',
    image: ruby,
    title: 'Ruby on Rails',
    price: 159.99,
    description:
    'Ruby is a dynamic, high-level, interpreted programming language with a focus on simplicity and productivity. It has an elegant syntax  development through the Ruby on Rails framework, which follows the .',
    },
    {
    id: 'p6',
    image: angular,
    title: 'Angular',
    price: 79.99,
    description:
    'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Developed and maintained by  on modularity, dependency injection, and a powerful template . .'
    }
];
