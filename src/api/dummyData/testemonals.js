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
            },
            {
              id: "2",
              name: "Algstino",
              text: " Congue condimentum et non eu arcu sociis aenean vivamus quisque. Porta purus urna. Massa id blandit enim cursus ante, nec consectetuer imperdiet ipsum...",
              job: "Marketing Company Director",
            },
            {
              id: "3",
              name: "Algstino",
              text: "Congue condimentum et non eu arcu sociis aenean vivamus quisque. Porta purus urna. Massa id blandit enim cursus ante, nec consectetuer imperdiet ipsum...",
              job: "Marketing Company Director",
            },
            {
              id: "4",
              name: "Algstino",
              text: " Congue condimentum et non eu arcu sociis aenean vivamus quisque. Porta purus urna. Massa id blandit enim cursus ante, nec consectetuer imperdiet ipsum...",
              job: "Marketing Company Director",
            },
          ]);
        }, 1000);
      });
    },
  };
}
export default extrasApi;
