import * as helper from "../helpers/char.helper.js";

export const fetchCharacterByProps = async (input: {}) => {
  //   const remapInput = Object.fromEntries(
  //     Object.entries(input).map(([key, value]) => [
  //       `props.${key}`,
  //       Number(value),
  //     ]),
  //   );

  const role = (input as unknown as { ROLE: string }).ROLE;

  const data = await helper.fetchCharByRole(Number(role));

  let largestMatchValue = { id: null, val: 0 };

  data.map((val) => {
    const currentMatchValue = { id: null, val: 0 };
    const propsArr = Object.entries(val.props);

    propsArr.map(([k, v]) => {
      if (Number(input[k as unknown as string]) === Number(v)) {
        currentMatchValue.id = val._id.toString();
        currentMatchValue.val += 1;
      }
    });

    if (largestMatchValue.val < currentMatchValue.val)
      largestMatchValue = currentMatchValue;
  });

  const finalResult = data.find(
    (v) => v._id.toString() === largestMatchValue.id,
  );

  const resultArr = Object.entries(finalResult.props).map(([k, v]) => {
    return {
      type: k.toLowerCase().replace("_", " "),
      val: helper.characterPropsTranslate(k, Number(role))?.[v] ?? "none",
    };
  });

  return { ...finalResult, resultArr };
};
