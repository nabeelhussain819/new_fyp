export const ReadQec = async () => {
    const response = await (await fetch("http://localhost:5000/qec-results"))
      .json()
      .then(function (result) {
        return result;
      });
    return response;
  };
  export const ReadTeacherQec = async () => {
    const response = await (await fetch("http://localhost:5000/qec-results"))
      .json()
      .then(function (result) {
        console.log(result)
        return result;
      });
    return response;
  };