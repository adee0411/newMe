import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Slider,
  Alert,
} from "@mui/joy";

import { useDispatch, useSelector } from "react-redux";

import {
  setPresetDeficit,
  setFinetunedDeficit,
  toggleFineTuneDeficitCheck,
} from "../../../store/profileSlice";

/** Property settings for <Slider /> Component */
const marks = [
  { value: 100, label: "100 kcal" },
  { value: 500, label: "500 kcal" },
  { value: 1000, label: "1000 kcal" },
  { value: 1500, label: "1500 kcal" },
];

function valueText(value) {
  return `${value} kcal`;
}

const DeficitAlert = () => {
  return (
    <Alert variant="soft" color="danger" size="sm" sx={{ fontWeight: 400 }}>
      A kalória-deficit mértéke túl magas! Hosszútávon az egészségre káros
      hatással lehet.
    </Alert>
  );
};

const DeficitSettings = () => {
  const dispatch = useDispatch();
  const { presetDeficitInput, finetunedDeficitInput } = useSelector(
    (state) => state.profileData.dietData
  );

  const { isFineTuneDeficitChecked, isDeficitSettingsDisabled } = useSelector(
    (state) => state.profileData.UI
  );

  const { calculatedDailyDeficit } = useSelector(
    (state) => state.profileData.calculatedData
  );

  const handleFinetuneDeficitCheck = (e) => {
    dispatch(toggleFineTuneDeficitCheck());
  };

  const handlepresetDeficitInputChange = (e) => {
    const deficitValue = e.target.value;
    dispatch(setPresetDeficit(deficitValue));
    dispatch(setFinetunedDeficit(deficitValue));
  };

  const handleFineTunedDeficitChange = (e) => {
    const deficitValue = e.target.value;
    dispatch(setFinetunedDeficit(deficitValue));
  };
  return (
    <div>
      <FormControl>
        <FormLabel>Fogyás üteme</FormLabel>
        {isDeficitSettingsDisabled && (
          <Alert color="warning" variant="soft" size="sm">
            Már megadtad a diéta hosszát és a célsúlyt, így a napi
            kalória-deficit értéke ezekből automatikusan számolódik. Ha
            szeretnéd testreszabni a kalória-deficitet, töröld az egyik adatot!
          </Alert>
        )}
        <RadioGroup
          size="sm"
          orientation="horizontal"
          sx={{ justifyContent: "space-between" }}
          value={+presetDeficitInput}
          name="presetDeficitInput"
          onChange={handlepresetDeficitInputChange}
        >
          <Radio
            label="Lassú"
            name="presetDeficitInput"
            value={200}
            disabled={isFineTuneDeficitChecked || isDeficitSettingsDisabled}
          />
          <Radio
            label="Normál"
            name="presetDeficitInput"
            value={500}
            disabled={isFineTuneDeficitChecked || isDeficitSettingsDisabled}
          />
          <Radio
            label="Gyors"
            name="presetDeficitInput"
            value={1000}
            disabled={isFineTuneDeficitChecked || isDeficitSettingsDisabled}
          />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <Checkbox
          label="Deficit testreszabása"
          checked={isFineTuneDeficitChecked}
          name="finetuneDeficit"
          onChange={handleFinetuneDeficitCheck}
          size="sm"
          disabled={isDeficitSettingsDisabled}
        />
      </FormControl>
      <FormControl>
        <Slider
          type="range"
          size="sm"
          valueLabelDisplay="auto"
          value={+finetunedDeficitInput}
          min={100}
          max={1500}
          step={100}
          onChange={handleFineTunedDeficitChange}
          getAriaValueText={valueText}
          marks={marks}
          name="finetunedDeficitInput"
          sx={{ width: "80%", mx: "auto", mb: 2 }}
          disabled={!isFineTuneDeficitChecked || isDeficitSettingsDisabled}
        />
        {calculatedDailyDeficit > 1000 && <DeficitAlert />}
      </FormControl>
    </div>
  );
};

export default DeficitSettings;
