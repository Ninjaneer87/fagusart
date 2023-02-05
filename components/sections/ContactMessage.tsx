import { CircularProgress, Snackbar, useMediaQuery, useTheme, Alert } from "@mui/material";
import React, { useState, FormEventHandler } from "react";
import MyInput from "@/components/ui/MyInput";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import useForm from "hooks/useForm";
import { createBody } from "utils/utility";
import BlurIn from "@/components/ui/BlurIn";
import MessageSuccess from "@/components/ui/MessageSuccess";
import { contactFormInputs } from "utils/constants";
import Button from "@mui/material/Button";
import LoadingBar from "../ui/LoadingBar";
import ClientOnlyPortal from "../portals/ClientOnlyPortal";

const ContactMessage = () => {
  const { inputs, setInputs, formIsValid, resetForm } = useForm(contactFormInputs);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const closeSnack = () => setSnackOpen(false);
  const closeDialog = () => setDialogOpen(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (formIsValid) {
      const emailBody = createBody(inputs);
      setLoading(true);
      try {
        // await axios.post("/api/email", emailBody);
        console.log(emailBody)
        setTimeout(() => {
          setLoading(false);
          setDialogOpen(true);
          resetForm();
        }, 1500);
      } catch (error) {
        setLoading(false);
        setSnackOpen(true);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center" >
      {loading && <LoadingBar />}

      <div className="max-w-[600px] w-full">
        <BlurIn>
          <form noValidate autoComplete="off" onSubmit={handleSubmit} className='flex flex-col gap-8'>
            {Object.entries(inputs).map(([key, formCtrl], i) => (
              <BlurIn key={key} delay={i * 150}>
                <MyInput
                  elementType={formCtrl.elementType}
                  value={formCtrl.value}
                  label={formCtrl.label}
                  required={formCtrl.required}
                  inputHandler={(e) => setInputs(e.target.value, key)}
                />
              </BlurIn>
            ))}

            <BlurIn>
              <Button
                type="submit"
                endIcon={!loading && <SendOutlinedIcon />}
                fullWidth
                disabled={!formIsValid}
                variant='contained'
                className="text-bg relative"
              >
                {!loading ? "Pošalji" : <CircularProgress size={24} />}
              </Button>
            </BlurIn>
          </form>
        </BlurIn>
      </div>

      <Dialog open={dialogOpen} onClose={closeDialog} fullScreen={isSmallScreen}>
        <MessageSuccess handleClose={closeDialog} />
      </Dialog>

      <ClientOnlyPortal>
        <Snackbar open={snackOpen} autoHideDuration={6000} onClose={closeSnack} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
          <Alert onClose={closeSnack} className="snackbar" severity="error">Došlo je do greške, poruka nije poslata</Alert>
        </Snackbar>
      </ClientOnlyPortal>
    </div>
  );
};

export default React.memo(ContactMessage);
