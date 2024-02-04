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
} from "../../../../store/profileSlice";

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
    (state) => state.profileData.formInput.dietDataInput
  );

  const { isFineTuneDeficitChecked, isDeficitSettingsDisabled } = useSelector(
    (state) => state.profileData.formInput.UI
  );

  const handleFinetuneDeficitCheck = () => {
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
        <FormLabel>Napi deficit mértéke</FormLabel>
        {isDeficitSettingsDisabled && (
          <Alert color="warning" variant="soft" size="sm" sx={{ my: 2 }}>
            Már megadtad a diéta hosszát és a célsúlyt, így a napi
            kalória-deficit értéke ezekből automatikusan számolódik. Ha
            szeretnéd testreszabni a kalória-deficitet, töröld az egyik adatot!
          </Alert>
        )}
        <RadioGroup
          size="sm"
          orientation="horizontal"
          sx={{ justifyContent: "space-between", my: 2 }}
          value={presetDeficitInput}
          name="presetDeficitInput"
          onChange={handlepresetDeficitInputChange}
        >
          <Radio
            label="Alacsony (200kcal / nap)"
            name="presetDeficitInput"
            value={200}
            disabled={
              isDeficitSettingsDisabled
                ? isDeficitSettingsDisabled
                : isFineTuneDeficitChecked
            }
          />
          <Radio
            label="Normál (500kcal / nap)"
            name="presetDeficitInput"
            value={500}
            disabled={
              isDeficitSettingsDisabled
                ? isDeficitSettingsDisabled
                : isFineTuneDeficitChecked
            }
          />
          <Radio
            label="Magas (1000kcal / nap)"
            name="presetDeficitInput"
            value={1000}
            disabled={
              isDeficitSettingsDisabled
                ? isDeficitSettingsDisabled
                : isFineTuneDeficitChecked
            }
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
      <FormControl sx={{ my: 2 }}>
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
        {finetunedDeficitInput > 1000 && isFineTuneDeficitChecked && (
          <DeficitAlert />
        )}
      </FormControl>
    </div>
  );
};

export default DeficitSettings;
