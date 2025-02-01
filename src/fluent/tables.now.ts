import '@servicenow/sdk/global'
import {
    ChoiceColumn,
    ClientScript,
    IntegerColumn,
    ReferenceColumn,
    StringColumn,
    Table,
} from '@servicenow/sdk/core'


export const x_1387810_other_fl_service_details = Table({
    name: 'x_1387810_other_fl_service_details',
    label: 'Service Approval',
    schema: {
        u_order: IntegerColumn({
            label: 'Order',
        }),
        u_source: ChoiceColumn({
            label: 'Approval Source',
            choices: {
                decision_table: {
                    label: 'Decision Table',
                    sequence: 1,
                    inactive: false,
                    inactive_on_update: false,
                },
                funding_profile: {
                    label: 'Funding Profile',
                    sequence: 2,
                    inactive: false,
                    inactive_on_update: false,
                },
                entitlement: {
                    label: 'Entitlement',
                    sequence: 3,
                    inactive: false,
                    inactive_on_update: false,
                },
            },
        }),
        u_approver: ReferenceColumn({
            label: 'Approver',
            referenceTable: 'sys_user',
            attributes: {},
            maxLength: 32,
        }),
        u_approval_type: StringColumn({
            label: 'Approval Type',
        }),
    },
    index: [{ name: 'index', element: ['u_approver'], unique: false }],
})



ClientScript({
    $id: Now.ID['cs02'],
    name: 'Hide/Show Approval Type',
    table: 'x_1387810_other_fl_service_details',
    type: 'onChange',
    field: 'u_source',
    ui_type: 'all',
    active: true,
    description: 'Only shows the Approval Type field when the Approval Source is Decision Table',
    isolate_script: false,
    script: script`
             function onChange(control, oldValue, newValue, isLoading, isTemplate) {
                if (isLoading) {
                   return;
                }
             
                if (newValue == 'u_decision_table'){
             	g_form.setVisible('u_approval_type', true);
                }
                else {
             	g_form.setVisible('u_approval_type', false);
                }
             
                //Type appropriate comment here, and begin script below
                
             }`,
})
