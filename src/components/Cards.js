import { Card } from "./Card";

export const Cards = () => {
  return (
    <div className="flex overflow-auto mx-5 space-x-2 md:space-x-8 ">
      <Card title={"Grants"} subtitle={"Show/Hide grant"} status={"Active"} />
      <Card title={"Grant Creation"} subtitle={"Enable/Disable grant creation"} status={"Active"} />
    </div>
  );
};
export default Cards;


