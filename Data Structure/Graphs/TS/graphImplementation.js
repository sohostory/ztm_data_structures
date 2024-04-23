var Graph = /** @class */ (function () {
    function Graph() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    Graph.prototype.addVertex = function (node) {
        this.numberOfNodes++;
        this.adjacentList[node] = [];
        return this;
    };
    Graph.prototype.addEdge = function (node1, node2) {
        //undirected Graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
        return this;
    };
    Graph.prototype.showConnections = function () {
        var allNodes = Object.keys(this.adjacentList);
        for (var _i = 0, allNodes_1 = allNodes; _i < allNodes_1.length; _i++) {
            var node = allNodes_1[_i];
            var nodeConnections = this.adjacentList[node];
            var connections = "";
            var vertex = void 0;
            for (var _a = 0, nodeConnections_1 = nodeConnections; _a < nodeConnections_1.length; _a++) {
                vertex = nodeConnections_1[_a];
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    };
    return Graph;
}());
var myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");
myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5
