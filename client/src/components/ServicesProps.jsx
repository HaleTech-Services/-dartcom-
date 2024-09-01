import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";

const p1 =
  "We conduct a wide group of analysis techniques in industries to evaluate the properties of a material component or system without causing damage.";

const p2 =
  "Construction of ultramodern ";

const p3 =
  "Liquid penetrant inspection is used to detect casting, forging welding, surface defects such as surface porosity, leaks in new products and fatigue cracks on service components.";

const p4 =
  "The use of Non Destructive Testing (NDT) method of inspecting materials for hidden flaws by using the ability of electromagnetic radiation to penetrate various materials.";

const p5 =
  "This method is sensitive to both surface and subsurface discontinuity. It is highly accurate in determining reflector position and estimating size and shape.";

const p6 =
  "They use slings and loose lifting gear, wire rope, hoist, pad. We conduct visual inspections preceeding any maintenace, repair, testing or any new device being put into service.";

const p7 =
  "We offer professional coating project design and independent paint inspection services to help owners of commercial and industrial structures alleviate the risk of corrosion.";

const p8 =
  "We uses a modified instrument such as spherometer at inspection sites to identify defects in metallurgy, in order to prevent fracture of the drill stem during well boring.";

const p9 =
  "We conducts certification of a wide range of control pressure storage tanks and safety valves for production facilities, refineries and manufacturing industries.";

const p10 =
  "We have knowledge to inspects all types of protecting and insulation system including marine coating fireproofing material and confirm the equipment suitable for it application, compressor, size separator and moist raps.";

const p11 =
  "We conduct provisional onsite socketing and splicing inspecting and testing on all types of lifting equipment's including wire rope slings, resin socketing or wire rope white metal socketing, hoist and plate clamps.";

const p12 =
  "We conducts destructive test of wire rope slings to determine the ultimate tensile strength of the wire rope slings. We also construct destructive test for all types of wire ropes up to 56mm in diameter.";

export default function ServicesProps() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 border-gray-500 border-b-2 pb-10">
        <div>
          <h4 className="font-semibold mb-1">NON DESTRUCTIVE TESTING(NDT)</h4>
          <img src={img1} alt="" />
          <p className="pt-1 text-[18px] sm:text-[15px]">{p1}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">MAGNETIC PARTICLE INSPECTION</h4>
          <img src={img2} alt="" />
          <p className="pt-1 text-[18px] sm:text-[15px]">{p2}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">LIQUID PENETRANT INSPECTION</h4>
          <img src={img3} alt="" />
          <p className="pt-1 text-[18px] sm:text-[15px]">{p3}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">RADIOGRAPHIC TESTING</h4>
          <img src={img4} alt="" />
          <p className="pt-1 text-[18px] sm:text-[15px]">{p4}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">ULTRASONIC TESTING</h4>
          <img src={img5} alt="" />
          <p className="pt-1 text-[18px] sm:text-[15px]">{p5}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">LIFTING EQUIPMENT INSPECTION</h4>
          <img src={img6} alt="" />
          <p className="pt-1 text-[18px] sm:text-[15px]">{p6}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">COATING/PAINTING INSPECTION</h4>
          <img src={img7} alt="" />
          <p className="pt-1 text-[18px] sm:text-[15px]">{p7}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">DRILL PIPE INSPECTION SERVICES</h4>
          <img src={img8} alt="" />
          <p className="pt-1 text-[18px] sm:text-[15px]">{p8}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">CALIBRATION/PRESSURE TESTING</h4>
          <img src={img9} alt="" />
          <p className="pt-1 text-[18px] sm:text-[15px]">{p9}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">WELDING INSPECTION SERVICES</h4>
          <img src={img10} alt="" />
          <p className="pt-1 text-[18px] sm:text-[15px]">{p10}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">
            SOCKETING AND SPLICING INSPECTION
          </h4>
          <img src={img11} alt="" />
          <p className="pt-1 text-[18px] sm:text-[15px]">{p11}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">DESTRUCTIVE TESTING SERVICE</h4>
          <img src={img12} alt="" />
          <p className="pt-1 text-[18px] sm:text-[15px]">{p12}</p>
        </div>
      </div>
    </div>
  );
}
