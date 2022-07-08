export const ReadQec = async () => {
    const response = await (await fetch("https://fyptes.herokuapp.com/qec-results"))
      .json()
      .then(function (result) {
        return result;
      });
    return response;
  };
  export const ReadTeacherQec = async () => {
    const response = await (await fetch("https://fyptes.herokuapp.com/qec-results"))
      .json()
      .then(function (result) {
        console.log(result)
        return result;
      });
    return response;
  };