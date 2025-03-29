import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Stack } from "@mui/material";
import { CippImageCard } from "../../components/CippCards/CippImageCard";
import { Layout as DashboardLayout } from "../../layouts";
import { useRouter } from "next/router";
import { ApiGetCall } from "../../api/ApiCall";

const OAuthRedirect = () => {
  const router = useRouter();
  const [queryParams, setQueryParams] = useState({ code: null, extension: null });

  useEffect(() => {
    if (router.isReady) {
      const { code, extension } = router.query;
      setQueryParams({ code, extension });
    }
  }, [router.isReady, router.query]);

  const { code, extension } = queryParams;

  const {
    data: status,
    isLoading,
    isError,
  } = ApiGetCall({
    url: "/api/ExecExtensionOAuth",
    queryKey: ["submitOAuth", code, extension],
    waiting: !!(code && extension),
    data: { code, extension },
  });

  return (
    <DashboardLayout>
      <Box
        sx={{
          flexGrow: 1,
          py: 4,
          height: "100vh", // Full height of the viewport
        }}
      >
        <Container maxWidth={false}>
          <Stack spacing={6} sx={{ height: "100%" }}>
            <Grid
              container
              spacing={3}
              justifyContent="center" // Center horizontally
              alignItems="center" // Center vertically
              sx={{ height: "100%" }} // Ensure the container takes full height
            >
              <Grid item xs={12} md={6}>
                <CippImageCard
                  isFetching={isLoading}
                  imageUrl="/assets/illustrations/undraw_online_test_re_kyfx.svg"
                  text={
                    isLoading
                      ? `Please wait...`
                      : isError
                      ? "Error: " + (status || "An error occurred while processing your request.")
                      : status || "Success! OAuth code submitted."
                  }
                  title={`Logging into ${extension}`}
                />
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </DashboardLayout>
  );
};

export default OAuthRedirect;
