import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <div className="space-y-4">
      <div>
        <p>size: lg</p>
        <div className="space-x-2">
          <Button variant="default" size="lg">
            default
          </Button>
          <Button variant="secondary" size="lg">
            secondary
          </Button>
          <Button variant="destructive" size="lg">
            destructive
          </Button>
          <Button variant="outline" size="lg">
            outline
          </Button>
          <Button variant="ghost" size="lg">
            ghost
          </Button>
          <Button variant="link" size="lg">
            link
          </Button>
        </div>
      </div>
      <div>
        <p>size: default</p>
        <div className="space-x-2">
          <Button variant="default">default</Button>
          <Button variant="secondary">secondary</Button>
          <Button variant="destructive">destructive</Button>
          <Button variant="outline">outline</Button>
          <Button variant="ghost">ghost</Button>
          <Button variant="link">link</Button>
        </div>
      </div>
      <div>
        <p>size: sm</p>
        <div className="space-x-2">
          <Button variant="default" size="sm">
            default
          </Button>
          <Button variant="secondary" size="sm">
            secondary
          </Button>
          <Button variant="destructive" size="sm">
            destructive
          </Button>
          <Button variant="outline" size="sm">
            outline
          </Button>
          <Button variant="ghost" size="sm">
            ghost
          </Button>
          <Button variant="link" size="sm">
            link
          </Button>
        </div>
      </div>
      <div>
        <p>size: icon</p>
        <div className="space-x-2">
          <Button variant="default" size="icon">
            d
          </Button>
          <Button variant="secondary" size="icon">
            s
          </Button>
          <Button variant="destructive" size="icon">
            d
          </Button>
          <Button variant="outline" size="icon">
            o
          </Button>
          <Button variant="ghost" size="icon">
            g
          </Button>
          <Button variant="link" size="icon">
            l
          </Button>
        </div>
      </div>
    </div>
  );
}
