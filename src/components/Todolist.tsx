import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";

const Todolist = () => {
  return (
    <div>
      Calender
      {/* Lists */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap">
          {/* List Items */}
          <Card className="p-4">
            <div className="flex item-center gap-4">
              <Checkbox id="item-1" checked />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex item-center gap-4">
              <Checkbox id="item-1" checked />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex item-center gap-4">
              <Checkbox id="item-1" checked />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex item-center gap-4">
              <Checkbox id="item-1" />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex item-center gap-4">
              <Checkbox id="item-1" />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex item-center gap-4">
              <Checkbox id="item-1" />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex item-center gap-4">
              <Checkbox id="item-1" />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex item-center gap-4">
              <Checkbox id="item-1" />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex item-center gap-4">
              <Checkbox id="item-1" />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Todolist;
