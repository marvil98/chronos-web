"use client";
import CustomDatePicker from "@/components/Datepicker";
import Navbar from "@/components/Navbar";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FormControl from "@mui/material/FormControl";
import { useState, useMemo } from "react";
import "../crear-alarmas/crearAlarmas.css";
import checkImage from "@/assets/check-ico.svg";
import { PopUpWarning } from "@/components/pop-up-warning";

export default function Alarms() {
  const [formData, setFormData] = useState({
    date: "",
    hour: "",
    sound: "",
    title: "",
    snoozeMode: false,
    repeatSound: false,
  });

  const [errors, setErrors] = useState({
    date: false,
    hour: false,
    sound: false,
    title: false,
  });

  const [formTouched, setFormTouched] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [varPopUpWarning] = useState({
    image: checkImage,
    text: "ALARMA CREADA EXITOSAMENTE",
  });

  const handleSelectChange = (event: SelectChangeEvent) => {
    setFormData({ ...formData, sound: event.target.value });
    if (formTouched) setErrors({ ...errors, sound: false });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    if (formTouched) setErrors({ ...errors, [name]: false });
  };

  const handleBlur = (
    event: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    console.log(!value.trim());
    if (!value.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: true }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
    }
  };

  const validateForm = () => {
    return formData.date && formData.hour && formData.sound && formData.title;
  };

  const isFormValid = useMemo(() => validateForm(), [formData]);

  const handleSave = () => {
    setFormTouched(true);

    const newErrors = {
      date: !formData.date,
      hour: !formData.hour,
      sound: !formData.sound,
      title: !formData.title,
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      const existingAlarms = JSON.parse(
        localStorage.getItem("alarmas") || "[]",
      );
      localStorage.setItem(
        "alarmas",
        JSON.stringify([...existingAlarms, formData]),
      );

      setShowWarning(true);
    }
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    value = value.replace(/[^0-9:]/g, "");

    if (value.length === 2 && !value.includes(":")) {
      value = value + ":";
    }

    const timeRegex = /^([01]?\d|2[0-3]):([0-5]?\d)?$/;
    if (!timeRegex.test(value) && value.length >= 5) return;

    setFormData({ ...formData, hour: value });
    setErrors({ ...errors, hour: false });
  };

  return (
    <>
      <Navbar backTo="/alarmas" />
      <Container sx={{ mt: "25px !important" }}>
        <Typography variant="h1">ALARMAS</Typography>
        <div className="form">
          <div className="form-inputs">
            <CustomDatePicker
              value={formData.date}
              onChange={(date: any) => setFormData({ ...formData, date })}
              error={errors.date}
            />

            <FormControl
              sx={{ width: "370px" }}
              variant="outlined"
              error={errors.hour}
            >
              <InputLabel htmlFor="outlined-adornment-hour">Hora</InputLabel>
              <OutlinedInput
                id="outlined-adornment-hour"
                name="hour"
                value={formData.hour}
                onChange={handleTimeChange}
                onBlur={handleBlur}
                inputProps={{
                  maxLength: 5,
                  placeholder: "HH:mm",
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <AccessTimeIcon color="action" />
                  </InputAdornment>
                }
                label="Hora"
              />
              {errors.hour && (
                <Typography color="error" variant="caption">
                  Este campo es obligatorio
                </Typography>
              )}
            </FormControl>

            <FormControl
              sx={{ width: "370px", marginTop: "6px" }}
              error={errors.sound}
            >
              <InputLabel id="demo-simple-select-label">Sonido</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.sound}
                name="sound"
                onChange={handleSelectChange}
                onBlur={handleBlur}
              >
                <MenuItem value="10">Clásico</MenuItem>
                <MenuItem value="20">Digital</MenuItem>
                <MenuItem value="30">Campana</MenuItem>
                <MenuItem value="40">Naturaleza</MenuItem>
                <MenuItem value="50">Suave</MenuItem>
                <MenuItem value="60">Fuerte</MenuItem>
              </Select>
              {errors.sound && (
                <Typography color="error" variant="caption">
                  Este campo es obligatorio
                </Typography>
              )}
            </FormControl>
          </div>

          <div className="form-inputs">
            <TextField
              id="outlined-basic"
              label="Título"
              name="title"
              variant="outlined"
              sx={{ width: "370px", height: "50px" }}
              value={formData.title}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.title}
              helperText={errors.title ? "Este campo es obligatorio" : ""}
              autoComplete="off"
            />

            <FormControlLabel
              control={
                <Switch
                  name="snoozeMode"
                  checked={formData.snoozeMode}
                  onChange={handleInputChange}
                />
              }
              label="Modo siesta"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="repeatSound"
                  checked={formData.repeatSound}
                  onChange={handleInputChange}
                />
              }
              label="Repetir sonido"
            />
          </div>
        </div>

        <div className="actions-items">
          <Button
            variant="contained"
            onClick={handleSave}
            disabled={!isFormValid}
          >
            Guardar
          </Button>
        </div>

        <PopUpWarning
          isOpen={showWarning}
          message={varPopUpWarning.text}
          image={varPopUpWarning.image}
          setShowWarning={setShowWarning}
          routing="/alarmas"
        />
      </Container>
    </>
  );
}
