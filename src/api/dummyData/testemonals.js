function extrasApi() {
  return {
    get_reviews() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: "1",
              name: "Algstino",
              text: " Congue condimentum et non eu arcu sociis aenean vivamus quisque. Porta purus urna. Massa id blandit enim cursus ante, nec consectetuer imperdiet ipsum...",
              job: "Marketing Company Director",
              rate: 4,
            },
            {
              id: "2",
              name: "Algstino",
              text: " Congue condimentum et non eu arcu sociis aenean vivamus quisque. Porta purus urna. Massa id blandit enim cursus ante, nec consectetuer imperdiet ipsum...",
              job: "Marketing Company Director",
              rate: 3.4,
            },
            {
              id: "3",
              name: "Algstino",
              text: "Congue condimentum et non eu arcu sociis aenean vivamus quisque. Porta purus urna. Massa id blandit enim cursus ante, nec consectetuer imperdiet ipsum...",
              job: "Marketing Company Director",
              rate: 3.0,
            },
            {
              id: "4",
              name: "Algstino",
              text: " Congue condimentum et non eu arcu sociis aenean vivamus quisque. Porta purus urna. Massa id blandit enim cursus ante, nec consectetuer imperdiet ipsum...",
              job: "Marketing Company Director",
              rate: 5,
            },
          ]);
        }, 1000);
      });
    },
  };
}
export default extrasApi;
