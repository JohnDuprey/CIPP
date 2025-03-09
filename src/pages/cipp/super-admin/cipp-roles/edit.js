import { useRouter } from "next/router";
import { Layout as DashboardLayout } from "/src/layouts/index.js";
import CippPageCard from "/src/components/CippCards/CippPageCard";
import { CippCustomRoles } from "/src/components/CippSettings/CippCustomRoles";
import { CardContent, Stack, Typography } from "@mui/material";

const EditRolePage = () => {
  const router = useRouter();
  const { role } = router.query;

  return (
    <CippPageCard hideBackButton={false} title={`Edit Role: ${role}`}>
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="body2">
            Edit the permissions and settings for the custom role.
          </Typography>
          <CippCustomRoles selectedRole={role} />
        </Stack>
      </CardContent>
    </CippPageCard>
  );
};

EditRolePage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default EditRolePage;
