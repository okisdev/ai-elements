"use client";

import {
  Artifact,
  ArtifactAction,
  ArtifactActions,
  ArtifactContent,
  ArtifactDescription,
  ArtifactHeader,
  ArtifactTitle,
} from "@repo/elements/artifact";
import { CodeBlock } from "@repo/elements/src/code-block";
import {
  CopyIcon,
  DownloadIcon,
  PlayIcon,
  RefreshCwIcon,
  ShareIcon,
} from "lucide-react";

const code = `# Dijkstra's Algorithm implementation
import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    heap = [(0, start)]
    visited = set()
    
    while heap:
        current_distance, current_node = heapq.heappop(heap)
        if current_node in visited:
            continue
        visited.add(current_node)
        
        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(heap, (distance, neighbor))
    
    return distances

# Example graph
 graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}

print(dijkstra(graph, 'A'))`;

const Example = () => (
  <Artifact>
    <ArtifactHeader>
      <div>
        <ArtifactTitle>Dijkstra's Algorithm Implementation</ArtifactTitle>
        <ArtifactDescription>Updated 1 minute ago</ArtifactDescription>
      </div>
      <div className="flex items-center gap-2">
        <ArtifactActions>
          <ArtifactAction
            icon={PlayIcon}
            label="Run"
            onClick={() => console.log("Run")}
            tooltip="Run code"
          />
          <ArtifactAction
            icon={CopyIcon}
            label="Copy"
            onClick={() => console.log("Copy")}
            tooltip="Copy to clipboard"
          />
          <ArtifactAction
            icon={RefreshCwIcon}
            label="Regenerate"
            onClick={() => console.log("Regenerate")}
            tooltip="Regenerate content"
          />
          <ArtifactAction
            icon={DownloadIcon}
            label="Download"
            onClick={() => console.log("Download")}
            tooltip="Download file"
          />
          <ArtifactAction
            icon={ShareIcon}
            label="Share"
            onClick={() => console.log("Share")}
            tooltip="Share artifact"
          />
        </ArtifactActions>
      </div>
    </ArtifactHeader>
    <ArtifactContent className="p-0">
      <CodeBlock
        className="border-none"
        code={code}
        language="python"
        showLineNumbers
      />
    </ArtifactContent>
  </Artifact>
);

export default Example;
