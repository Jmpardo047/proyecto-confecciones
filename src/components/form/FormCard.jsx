import { DropDown } from "./DropDown";
import { Options } from "./Options";


export const FormCard = () => {

  return (
  <>
  <form className="flex flex-col items-center justify-around size-3/5 mt-5 rounded-lg p-3 mx-auto"  style={{backgroundColor:"black"}}>
    <div className="text-center text-white">
      <p className="font-bold ">Client Form</p>
      <p>Ingresa los datos para hacer tu cotización personalizada</p>
    </div>
  <div className="grid gap-8  md:grid-cols-3" >

        <Options/>
        <DropDown/>
    </div>
  </form>
  </>
  );
};


