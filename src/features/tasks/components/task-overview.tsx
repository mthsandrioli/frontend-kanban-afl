import { PencilIcon } from "lucide-react";

import { DottedSeparator } from "@/components/dotted-separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { snakeCaseToTitleCase } from "@/lib/utils";

import { MemberAvatar } from "@/features/members/components/member-avatar";

import { OverviewProperty } from "./overview-property";
import { TaskDate } from "./task-date";

import { useEditTaskModal } from "../hooks/use-edit-task-modal";
import { Task } from "../types";

interface TaskOverviewProps {
  task: Task;
}

export const TaskOverview = ({ task }: TaskOverviewProps) => {
  const { open } = useEditTaskModal();

  return (
    <div className="flex flex-col gap-y-4 col-span-1">
      <div className="bg-muted rounded-lg p-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Visão geral</p>
          <Button onClick={() => open(task.$id)} size="sm" variant="secondary">
            <PencilIcon className="size-4 mr-2" />
            Editar
          </Button>
        </div>
        <DottedSeparator className="my-4" />
        <div className="flex flex-col gap-y-4">
          <OverviewProperty label="Responsável">
            <MemberAvatar name={task.assignee.name} className="size-6" />
            <p className="text-sm font-medium">{task.assignee.name}</p>
          </OverviewProperty>
          <OverviewProperty label="Data de entrega">
            <TaskDate value={task.dueDate} className="text-sm font-medium" />
          </OverviewProperty>
          <OverviewProperty label="Etapa">
            <Badge variant={task.status}>
              {snakeCaseToTitleCase(task.status)}
            </Badge>
          </OverviewProperty>
        </div>
      </div>
    </div>
  );
};
