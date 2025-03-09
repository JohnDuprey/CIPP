import React from "react";
import { Box, Button, SvgIcon } from "@mui/material";
import { CippDataTable } from "../CippTable/CippDataTable";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import NextLink from "next/link";

const CippRoles = () => {
  const actions = [
    {
      label: "Edit",
      icon: (
        <SvgIcon>
          <PencilIcon />
        </SvgIcon>
      ),
      link: "/cipp/super-admin/cipp-roles/edit?role=[RoleName]",
    },
    {
      label: "Delete",
      icon: (
        <SvgIcon>
          <TrashIcon />
        </SvgIcon>
      ),
      confirmText: "Are you sure you want to delete this custom role?",
      url: "/api/ExecCustomRole",
      type: "POST",
      data: {
        Action: "Delete",
        RoleName: "RoleName",
      },
      condition: (row) => row.Type === "Custom",
      relatedQueryKeys: ["customRoleList"],
    },
  ];

  return (
    <Box>
      <CippDataTable
        actions={actions}
        title="Roles"
        cardButton={
          <Button
            variant="contained"
            size="small"
            startIcon={
              <SvgIcon>
                <PencilIcon />
              </SvgIcon>
            }
            component={NextLink}
            href="/cipp/super-admin/cipp-roles/add"
          >
            Add Role
          </Button>
        }
        api={{
          url: "/api/ListCustomRole",
        }}
        queryKey="customRoleTable"
        simpleColumns={["RoleName", "Type", "EntraGroup"]}
      />
    </Box>
  );
};

export default CippRoles;
