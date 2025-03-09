import { Layout as DashboardLayout } from "/src/layouts/index.js";
import CippPageCard from "/src/components/CippCards/CippPageCard";
import { CippCustomRoles } from "/src/components/CippSettings/CippCustomRoles";
import { CardContent, Stack, Typography } from "@mui/material";

const AddRolePage = () => {
  return (
    <CippPageCard hideBackButton={false} title="Add New Role">
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="body2">
            Create a new custom role with specific permissions and settings.
          </Typography>
          <CippCustomRoles />
        </Stack>
      </CardContent>
    </CippPageCard>
  );
};

AddRolePage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default AddRolePage;
